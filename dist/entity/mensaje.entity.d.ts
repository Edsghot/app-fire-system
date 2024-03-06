import { UsuarioEntity } from "./usuario.entity";
export declare class MensajeEntity {
    IdMensaje: number;
    Imagen: string;
    Descripcion: string;
    Latitud: string;
    Longitud: string;
    IdUsuario: UsuarioEntity;
}
