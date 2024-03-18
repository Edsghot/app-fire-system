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
        succes?: undefined;
    } | {
        msg: string;
        value: Promise<MensajeEntity>;
        succes?: undefined;
    } | {
        msg: string;
        succes: boolean;
        value?: undefined;
    }>;
    actualizar(request: ActualizarEstadoDto): Promise<{
        msg: string;
        value?: undefined;
    } | {
        msg: string;
        value: MensajeEntity;
    }>;
    eliminarMensaje(id: number): Promise<{
        msg: string;
        detalle?: undefined;
    } | {
        msg: string;
        detalle: any;
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
}
