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
        detailMsg?: undefined;
        succes?: undefined;
    } | {
        msg: string;
        value: Promise<import("src/entity/mensaje.entity").MensajeEntity>;
        detailMsg?: undefined;
        succes?: undefined;
    } | {
        msg: string;
        detailMsg: any;
        succes: boolean;
        value?: undefined;
    }>;
    actualizarMensaj(actualizar: ActualizarEstadoDto): Promise<{
        msg: string;
        value?: undefined;
        detailMsg?: undefined;
    } | {
        msg: string;
        value: import("src/entity/mensaje.entity").MensajeEntity;
        detailMsg?: undefined;
    } | {
        msg: string;
        detailMsg: any;
        value?: undefined;
    }>;
    eliminarMensaje(id: number): Promise<{
        msg: string;
        detailMsg?: undefined;
    } | {
        msg: string;
        detailMsg: any;
    }>;
    reporteMensaje(id: number): Promise<{
        msg: string;
        value: any;
        detalle?: undefined;
    } | {
        msg: string;
        detalle: any;
        value?: undefined;
    }>;
    getall(): Promise<import("src/entity/mensaje.entity").MensajeEntity[]>;
}
