import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertDto } from 'src/dto/Satelite/insert.dto';
import { updateTemperatureDto } from 'src/dto/Satelite/updateTemperature.dto';
import { tSateliteEntity } from 'src/entity/sateliteEntity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SateliteService {
    constructor(
        @InjectRepository(tSateliteEntity)
        private satelliteRepository: Repository<tSateliteEntity>
      ) {}
    
      async insertarCoordenadas(coord: InsertDto) {
        var u = new tSateliteEntity();
    
        try {
          
          u.date = new Date();
          u.latitud = coord.latitud;
          u.longitud = coord.longitud;
          u.temperature = coord.temperature;
          const newSatellite = this.satelliteRepository.create(u);
          await this.satelliteRepository.save(newSatellite);
    
          return {msg:'se inserto correctamente',success: true};
        } catch (error) {
          return {msg:'error: ',detailMsg: error,sucess: false};
        }
      }
    
      async getById(id: number){
        var satellite = await this.satelliteRepository.findOne({where:{IdSatellite:id}});
    
        if(!satellite){
          return {value: null,msg:"No existe ningun dato"}
        }
    
        return {value: satellite};
      }
    
      async getTest(){
        return this.temperaturaAleatorio();
      }

      async getall(){
        var res= await this.satelliteRepository.find();

        return {msg:'lista de getall',value: res};

      }
    
      async temperaturaAleatorio() {
        return Math.random() * (100 - 40) + 40;
      }
}
