// std
import { deepStrictEqual, notStrictEqual, ok, strictEqual } from 'assert';

// FoalTS
import { Context, getHookFunction, HttpResponseBadRequest, ServiceManager } from '../../core';
import { getApiRequestBody, getApiResponses, IApiRequestBody, IApiResponses } from '../../openapi';
import { ValidateBody } from './validate-body.hook';

describe('ValidateBody', () => {

  const schema = {
    properties: {
      foo: { type: 'integer' }
    },
    type: 'object',
  };

  describe('should validate the request body and', () => {

    it('should not return an HttpResponseBadRequest if ctx.request.body is validated '
        + ' by ajv for the given schema.', () => {
      const hook = getHookFunction(ValidateBody(schema));
      const ctx = new Context({});
      ctx.request.body = {
        foo: 3
      };

      const actual = hook(ctx, new ServiceManager());
      strictEqual(actual instanceof HttpResponseBadRequest, false);
    });

    it('should return an HttpResponseBadRequest if ctx.request.body is not validated by '
        + ' ajv for the given schema.', () => {
      const hook = getHookFunction(ValidateBody(schema));

      function context(body) {
        const ctx = new Context({});
        ctx.request.body = body;
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
        + 'ctx.request.body is not validated by ajv.', () => {
      const hook = getHookFunction(ValidateBody(schema));
      const ctx = new Context({});

      const actual = hook(ctx, new ServiceManager());
      ok(actual instanceof HttpResponseBadRequest);
      notStrictEqual((actual as HttpResponseBadRequest).body, undefined);
    });

  });

  describe('should define an API specification', () => {

    it('unless options.openapi is undefined.', () => {
      @ValidateBody(schema)
      class Foobar {}

      strictEqual(getApiRequestBody(Foobar), undefined);
      strictEqual(getApiResponses(Foobar), undefined);
    });

    it('unless options.openapi is false.', () => {
      @ValidateBody(schema, { openapi: false })
      class Foobar {}

      strictEqual(getApiRequestBody(Foobar), undefined);
      strictEqual(getApiResponses(Foobar), undefined);
    });

    it('if options.openapi is true (class decorator).', () => {
      @ValidateBody(schema, { openapi: true })
      class Foobar {}

      const actualRequestBody = getApiRequestBody(Foobar);
      const expectedRequestBody: IApiRequestBody = {
        content: {
          'application/json': { schema: schema as object }
        },
        required: true
      };
      deepStrictEqual(actualRequestBody, expectedRequestBody);

      const actualResponses = getApiResponses(Foobar);
      const expectedResponses: IApiResponses = {
        400: { description: 'Bad request.' }
      };
      deepStrictEqual(actualResponses, expectedResponses);
    });

    it('if options.openapi is true (method decorator).', () => {
      class Foobar {
        @ValidateBody(schema, { openapi: true })
        foo() {}
      }

      const actualRequestBody = getApiRequestBody(Foobar, 'foo');
      const expectedRequestBody: IApiRequestBody = {
        content: {
          'application/json': { schema: schema as object }
        },
        required: true
      };
      deepStrictEqual(actualRequestBody, expectedRequestBody);

      const actualResponses = getApiResponses(Foobar, 'foo');
      const expectedResponses: IApiResponses = {
        400: { description: 'Bad request.' }
      };
      deepStrictEqual(actualResponses, expectedResponses);
    });

  });

});
