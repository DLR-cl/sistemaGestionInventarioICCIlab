import { Test, TestingModule } from '@nestjs/testing';
import { RecursoInventarioController } from './recurso_inventario.controller';
import { RecursoInventarioService } from './recurso_inventario.service';

describe('RecursoInventarioController', () => {
  let controller: RecursoInventarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecursoInventarioController],
      providers: [RecursoInventarioService],
    }).compile();

    controller = module.get<RecursoInventarioController>(RecursoInventarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
