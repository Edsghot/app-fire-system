import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { SateliteService } from './satelite.service';
import { InsertDto } from 'src/dto/Satelite/insert.dto';
import { updateTemperatureDto } from 'src/dto/Satelite/updateTemperature.dto';

@Controller('tsatelite')
export class SateliteController {
    constructor(private sateliteService: SateliteService)
    {}

    @Post('/insertar')
    async getCoordenate(@Body() coord : InsertDto) {
        return await this.sateliteService.insertarCoordenadas(coord);
    }

    @Get('/test')
    async test(){
        return await this.sateliteService.getTest();
    }

    @Get('/coordenada/:id')
    async getById(@Param('id') id: number){
        return await this.sateliteService.getById(id);
    }

    @Get('/getall')
    async getall(){
        return await this.sateliteService.getall();
    }
}