import { Body, Controller, Delete, Get, Post, Put, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { MensajeService } from './mensaje.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { createMensajeDto } from 'src/dto/Mensajes/createMensajeDto.dto';
import { CloudinaryService } from 'src/services/cloudinary/cloudinary.service';
import { ActualizarEstadoDto } from 'src/dto/Mensajes/actualizarEstado.dto';
import { query } from 'express';

@Controller('mensaje')
export class MensajeController {

    constructor(private mensajeService: MensajeService,private cloudinaryService: CloudinaryService){}

    @Post('insert')
    @UseInterceptors(FileInterceptor('file'))
    async insertar(
      @Body() mensaje: createMensajeDto,
      @UploadedFile() file?: Express.Multer.File,
    ) {
        var res = this.cloudinaryService.uploadFile(file, "incendios");
  
        return await this.mensajeService.createMensaje(mensaje, (await res).secure_url);
    }

    @Put('update')
    async actualizarMensaj(@Body() actualizar: ActualizarEstadoDto){
        return await this.mensajeService.actualizar(actualizar);
    }

    @Delete('delete')
    async eliminarMensaje(@Query('id') id: number) {
        return await this.mensajeService.eliminarMensaje(id)
    }

    @Get('reporte')
    async reporteMensaje(@Query('id') id:number){
        return await this.mensajeService.reporteUsuario(id);
    }
}
