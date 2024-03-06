import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UsuarioEntity } from "./usuario.entity";

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
    Longitud: string;   
    @ManyToOne(() => UsuarioEntity, usuarioEntity => usuarioEntity.IdUsuario)
    @JoinColumn({ name: 'IdUsuario' })
    IdUsuario: UsuarioEntity; 
}