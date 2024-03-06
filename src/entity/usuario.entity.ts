import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tUsuario' })
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    IdUsuario: number;
    
    @Column({ unique: true })
    Email: string;
    
    @Column()
    Contrasena: string;

    @Column()
    Nombre: string;

    @Column()
    Apellido: string;    

    @Column()
    Telefono: string;    
}