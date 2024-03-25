import { UsuarioEntity } from "./usuario.entity";
declare enum estado {
    ACTIVO = 0,
    ENCAMINO = 1,
    CONTROLADO = 2
}
export declare class MensajeEntity {
    IdMensaje: number;
    Imagen: string;
    Descripcion: string;
    Latitud: string;
    Estado: estado;
    Fecha: Date;
    Longitud: string;
    IdUsuario: UsuarioEntity;
}
export {};
