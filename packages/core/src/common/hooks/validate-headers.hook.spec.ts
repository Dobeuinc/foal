// std
import { deepStrictEqual, notStrictEqual, ok, strictEqual } from 'assert';

// FoalTS
import { Context, getHookFunction, HttpResponseBadRequest, ServiceManager } from '../../core';
import { getApiParameters, getApiResponses, IApiHeaderParameter, IApiResponses } from '../../openapi';
import { ValidateHeaders } from './validate-headers.hook';

describe('ValidateHeaders', () => {

  describe('should validate the headers and', () => {

    const schema = {
      properties: {
        foo: { type: 'integer' }
      },
      type: 'object',
    };

    it('should throw an error if the schema is not of "type" object (JSON schema).', () => {
      try {
        ValidateHeaders({ type: 'string' });
        throw new Error('An error should have been thrown.');
      } catch (error) {
        strictEqual(error.message, 'ValidateHeaders only accepts a schema of type "object".');
      }
    });

    it('should not return an HttpResponseBadRequest if ctx.request.headers is validated '
        + ' by ajv for the given schema.', () => {
      const hook = getHookFunction(ValidateHeaders(schema));
      const ctx = new Context({});
      ctx.request.headers = {
        foo: '3'
      };

      const actual = hook(ctx, new ServiceManager());
      strictEqual(actual instanceof HttpResponseBadRequest, false);
    });

    it('should return an HttpResponseBadRequest if ctx.request.headers is not validated by '
        + ' ajv for the given schema.', () => {
      const schema = {
        properties: {
          foo: { type: 'integer' }
        },
        type: 'object',
      };
      const hook = getHookFunction(ValidateHeaders(schema));

      function context(headers) {
        const ctx = new Context({});
        ctx.request.headers = headers;
        return ctx;
      }

      ok(hook(context(null), new ServiceManager()) instanceof HttpResponseBadRequest);
      ok(hook(context(undefined), new ServiceManager()) instanceof HttpResponseBadRequest);
      ok(hook(context('foo'), new ServiceManager()) instanceof HttpResponseBadRequest);
      ok(hook(context(3), new ServiceManager()) instanceof HttpResponseBadRequest);
      ok(hook(context(true), new ServiceManager()) instanceof HttpResponseBadRequest);
      ok(hook(context({ foo: 'a' }), new ServiceManager()) instanceof HttpResponseBadRequest);
    });

    it('should return an HttpResponseBadRequest with a defined `body` property if '
        + 'ctx.request.headers is not validated by ajv.', () => {
      const schema = {
        properties: {
          foo: { type: 'integer' }
        },
        type: 'object',
      };
      const hook = getHookFunction(ValidateHeaders(schema));
      const ctx = new Context({});

      const actual = hook(ctx, new ServiceManager());
      ok(actual instanceof HttpResponseBadRequest);
      notStrictEqual((actual as HttpResponseBadRequest).body, undefined);
    });

  });

  describe('should define an API specification', () => {

    const schema = {
      properties: {
        barfoo: { type: 'string' },
        foobar: { type: 'string' },
      },
      required: [ 'barfoo' ],
      type: 'object',
    };

    it('unless options.openapi is undefined.', () => {
      @ValidateHeaders(schema)
      class Foobar {}

      strictEqual(getApiParameters(Foobar), undefined);
    });

    it('unless options.openapi is false.', () => {
      @ValidateHeaders(schema, { openapi: false })
      class Foobar {}

      strictEqual(getApiParameters(Foobar), undefined);
    });

    it('if options.openapi is true (class decorator).', () => {
      @ValidateHeaders(schema, { openapi: true })
      class Foobar {}

      const actual = getApiParameters(Foobar);
      const expected: IApiHeaderParameter[] = [
        {
          in: 'header',
          name: 'foobar',
          schema: { type: 'string' }
        },
        {
          in: 'header',
          name: 'barfoo',
          required: true,
          schema: { type: 'string' }
        },
      ];
      deepStrictEqual(actual, expected);

      const actualResponses = getApiResponses(Foobar);
      const expectedResponses: IApiResponses = {
        400: { description: 'Bad request.' }
      };
      deepStrictEqual(actualResponses, expectedResponses);
    });

    it('if options.openapi is true (method decorator).', () => {
      class Foobar {
        @ValidateHeaders(schema, { openapi: true })
        foo() {}
      }

      const actual = getApiParameters(Foobar, 'foo');
      const expected: IApiHeaderParameter[] = [
        {
          in: 'header',
          name: 'foobar',
          schema: { type: 'string' }
        },
        {
          in: 'header',
          name: 'barfoo',
          required: true,
          schema: { type: 'string' }
        },
      ];
      deepStrictEqual(actual, expected);

      const actualResponses = getApiResponses(Foobar, 'foo');
      const expectedResponses: IApiResponses = {
        400: { description: 'Bad request.' }
      };
      deepStrictEqual(actualResponses, expectedResponses);
    });

  });

});
