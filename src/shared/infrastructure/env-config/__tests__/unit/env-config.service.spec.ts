import { Test, TestingModule } from '@nestjs/testing';
import { EnvConfigService } from '../../env-config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configServiceStub } from '@/shared/stubs/config-service.stub';

describe('EnvConfigService', () => {
  let service: EnvConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [EnvConfigService,
        {provide: ConfigService, useValue: configServiceStub}
      ],
    }).compile();

    service = module.get<EnvConfigService>(EnvConfigService);
  });

  afterEach(async() => {
    jest.clearAllMocks()
  })
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the variable PORT', () => {
    jest.spyOn(configServiceStub, 'get').mockReturnValue(3000)
    expect(service.getAppPort()).toBe(3000)
  })

  it('should return the variable NODE_ENV', () => {
    jest.spyOn(configServiceStub, 'get').mockReturnValue('test')
  expect(service.getNodeEnv()).toBe('test');
  })
});
