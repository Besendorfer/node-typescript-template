import supertest from 'supertest';
import { server } from './index';

describe('Basic server test', () => {
  const request = supertest.agent(server);

  afterAll(() => {
    server.close();
  });

  it('should get /', async () => {
    const res = await request.get('/api');

    expect(res.status).toBe(200);
    expect(res.text).toEqual('Hello World!');
  });
});
