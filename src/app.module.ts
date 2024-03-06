import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './modulo/usuario/usuario.module';

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
}), UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
