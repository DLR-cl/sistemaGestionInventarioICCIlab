import { PartialType } from '@nestjs/mapped-types';
import { CreateRecursoInventarioDto } from './create-recurso_inventario.dto';

export class UpdateRecursoInventarioDto extends PartialType(CreateRecursoInventarioDto) {}
