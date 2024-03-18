import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UsuarioEntity } from "./usuario.entity";

enum estado{
    ACTIVO = 0,
    CONTROLADO = 1,
    ENCAMINO = 2
}

@Entity({ name: 'tMensaje' })
export class MensajeEntity {
    @PrimaryGeneratedColumn()
    IdMensaje: number;
    
    @Column()
    Imagen: string;

    @Column()
    Descripcion: string;

    @Column()
    Latitud: string;

    @Column()
    Estado: estado;

    @Column()
    Fecha: Date;
    
    @Column()
    Longitud: string;   
    @ManyToOne(() => UsuarioEntity, usuarioEntity => usuarioEntity.IdUsuario)
    @JoinColumn({ name: 'IdUsuario' })
    IdUsuario: UsuarioEntity; 
}