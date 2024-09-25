import { Test, TestingModule } from '@nestjs/testing';
import { RecursoInventarioService } from './recurso_inventario.service';

describe('RecursoInventarioService', () => {
  let service: RecursoInventarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecursoInventarioService],
    }).compile();

    service = module.get<RecursoInventarioService>(RecursoInventarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
