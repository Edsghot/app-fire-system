import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { UsuarioEntity } from 'src/entity/usuario.entity';
import { AdministradorEntity } from 'src/entity/administrador.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([UsuarioEntity]),
        TypeOrmModule.forFeature([AdministradorEntity]),
      ],
  providers: [UsuarioService],
  controllers: [UsuarioController]
})
export class UsuarioModule {}
