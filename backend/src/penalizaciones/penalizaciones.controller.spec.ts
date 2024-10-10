import { Test, TestingModule } from '@nestjs/testing';
import { PenalizacionesController } from './penalizaciones.controller';
import { PenalizacionesService } from './penalizaciones.service';

describe('PenalizacionesController', () => {
  let controller: PenalizacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PenalizacionesController],
      providers: [PenalizacionesService],
    }).compile();

    controller = module.get<PenalizacionesController>(PenalizacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
