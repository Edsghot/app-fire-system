import { Module } from '@nestjs/common';
import { MensajeController } from './mensaje.controller';
import { MensajeService } from './mensaje.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajeEntity } from 'src/entity/mensaje.entity';
import { UsuarioEntity } from 'src/entity/usuario.entity';
import { CloudinaryService } from 'src/services/cloudinary/cloudinary.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MensajeEntity]),TypeOrmModule.forFeature([UsuarioEntity])
  ],
  controllers: [MensajeController],
  providers: [MensajeService,CloudinaryService]
})
export class MensajeModule {}
