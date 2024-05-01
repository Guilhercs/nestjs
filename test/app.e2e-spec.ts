import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import  request from 'supertest';
import { AppModule } from './../src/app.module';
import { EnvConfigModule } from '@/shared/infrastructure/env-config/env-config.module';
import { ConfigService } from '@nestjs/config';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, EnvConfigModule],
      providers: [ConfigService, EnvConfigModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
