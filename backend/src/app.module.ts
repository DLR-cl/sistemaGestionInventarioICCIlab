import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecursosModule } from './recursos/recursos.module';
import { DatabaseModule } from './database/database/database.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [RecursosModule, DatabaseModule, CategoriasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
