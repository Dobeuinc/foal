// std
import { ServiceManager } from '@foal/core';
import { strictEqual } from 'assert';

// 3p
import { Column, DataSource, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TYPEORM_DATA_SOURCE_KEY } from '../common';

// FoalTS
import { fetchUser } from './fetch-user.util';

function testSuite(type: 'mysql'|'mariadb'|'postgres'|'sqlite'|'better-sqlite3') {

  describe(`with ${type}`, () => {

    @Entity()
    class User {
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      name: string;
    }

    let dataSource: DataSource;
    let services: ServiceManager;
    let user: User;

    before(async () => {
      switch (type) {
        case 'mysql':
        case 'mariadb':
          dataSource = new DataSource({
            database: 'test',
            dropSchema: true,
            entities: [ User ],
            password: 'test',
            port: type === 'mysql' ? 3308 : 3307,
            synchronize: true,
            type,
            username: 'test',
          });
          break;
        case 'postgres':
          dataSource = new DataSource({
            database: 'test',
            dropSchema: true,
            entities: [ User ],
            password: 'test',
            synchronize: true,
            type,
            username: 'test',
          });
          break;
        case 'sqlite':
        case 'better-sqlite3':
          dataSource = new DataSource({
            database: 'test_db.sqlite',
            dropSchema: true,
            entities: [ User ],
            synchronize: true,
            type,
          });
          break;
        default:
          break;
      }
      await dataSource.initialize();

      user = new User();
      user.name = 'foobar';
      await dataSource.getRepository(User).save(user);

      services = new ServiceManager()
        .set(TYPEORM_DATA_SOURCE_KEY, dataSource);
    });

    after(async () => {
      if (dataSource) {
        await dataSource.destroy();
      }
    });

    it('should return the user fetched from the database (id: number).', async () => {
      const actual = await fetchUser(User)(user.id, services);
      if (actual === null) {
        throw new Error('The user should not be null.');
      }
      strictEqual(actual.id, user.id);
    });

    it('should return the user fetched from the database (id: string).', async () => {
      const actual = await fetchUser(User)(user.id.toString(), services);
      if (actual === null) {
        throw new Error('The user should not be null.');
      }
      strictEqual(actual.id, user.id);
    });

    it('should return null if no user is found in the database.', async () => {
      const actual = await fetchUser(User)(56, services);
      strictEqual(actual, null);
    });

  });

}

describe('fetchUser', () => {

  testSuite('mysql');
  testSuite('mariadb');
  testSuite('sqlite');
  testSuite('better-sqlite3');
  testSuite('postgres');

});
