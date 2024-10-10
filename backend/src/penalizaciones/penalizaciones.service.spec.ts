import { Test, TestingModule } from '@nestjs/testing';
import { PenalizacionesService } from './penalizaciones.service';

describe('PenalizacionesService', () => {
  let service: PenalizacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PenalizacionesService],
    }).compile();

    service = module.get<PenalizacionesService>(PenalizacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
