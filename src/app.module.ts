import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './modulo/usuario/usuario.module';
import { MensajeModule } from './modulo/mensaje/mensaje.module';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryModule } from './services/cloudinary/cloudinary.module';
import { SateliteModule } from './modulo/satelite/satelite.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'ccontrolz.com',
    port: 3306,
    username: 'nibcqvah_edsghot',
    password: 'Repro123.',
    database: 'nibcqvah_AppFireSystemDb',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
}), ConfigModule.forRoot({isGlobal: true}),UsuarioModule, MensajeModule,CloudinaryModule, SateliteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
