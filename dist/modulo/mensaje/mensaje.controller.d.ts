/// <reference types="multer" />
import { MensajeService } from './mensaje.service';
import { createMensajeDto } from 'src/dto/Mensajes/createMensajeDto.dto';
import { CloudinaryService } from 'src/services/cloudinary/cloudinary.service';
import { ActualizarEstadoDto } from 'src/dto/Mensajes/actualizarEstado.dto';
export declare class MensajeController {
    private mensajeService;
    private cloudinaryService;
    constructor(mensajeService: MensajeService, cloudinaryService: CloudinaryService);
    insertar(mensaje: createMensajeDto, file?: Express.Multer.File): Promise<{
        msg: string;
        value?: undefined;
        succes?: undefined;
    } | {
        msg: string;
        value: Promise<import("src/entity/mensaje.entity").MensajeEntity>;
        succes?: undefined;
    } | {
        msg: string;
        succes: boolean;
        value?: undefined;
    }>;
    actualizarMensaje(actualizar: ActualizarEstadoDto): any;
    eliminarMensaje(id: number): any;
    reporteMensaje(id: number): any;
}
