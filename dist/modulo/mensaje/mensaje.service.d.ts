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
}
