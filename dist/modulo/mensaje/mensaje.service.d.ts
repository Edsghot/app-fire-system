import { ActualizarEstadoDto } from 'src/dto/Mensajes/actualizarEstado.dto';
import { createMensajeDto } from 'src/dto/Mensajes/createMensajeDto.dto';
import { MensajeEntity } from 'src/entity/mensaje.entity';
import { UsuarioEntity } from 'src/entity/usuario.entity';
import { Repository } from 'typeorm';
export declare class MensajeService {
    private mensajeRepository;
    private usuarioRepository;
    constructor(mensajeRepository: Repository<MensajeEntity>, usuarioRepository: Repository<UsuarioEntity>);
    createMensaje(mensaje: createMensajeDto, url: string): Promise<{
        msg: string;
        value?: undefined;
        detailMsg?: undefined;
        succes?: undefined;
    } | {
        msg: string;
        value: Promise<MensajeEntity>;
        detailMsg?: undefined;
        succes?: undefined;
    } | {
        msg: string;
        detailMsg: any;
        succes: boolean;
        value?: undefined;
    }>;
    actualizar(request: ActualizarEstadoDto): Promise<{
        msg: string;
        value?: undefined;
        detailMsg?: undefined;
    } | {
        msg: string;
        value: MensajeEntity;
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
    reporteUsuario(id: number): Promise<{
        msg: string;
        value: any;
        detalle?: undefined;
    } | {
        msg: string;
        detalle: any;
        value?: undefined;
    }>;
    getall(): Promise<MensajeEntity[]>;
}
