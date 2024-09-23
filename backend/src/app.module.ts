import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecursosModule } from './recursos/recursos.module';
import { DatabaseModule } from './database/database/database.module';
import { CategoriasModule } from './categorias/categorias.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { PrestamosModule } from './prestamos/prestamos.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [RecursosModule, DatabaseModule, CategoriasModule, EstudiantesModule, PrestamosModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
