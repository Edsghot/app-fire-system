import { Module } from '@nestjs/common';
import { SateliteController } from './satelite.controller';
import { SateliteService } from './satelite.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tSateliteEntity } from 'src/entity/sateliteEntity.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([tSateliteEntity]),
  ],
  controllers: [SateliteController],
  providers: [SateliteService]
})
export class SateliteModule {}
