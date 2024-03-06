import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tAdministrador' })
export class AdministradorEntity {
    @PrimaryGeneratedColumn()
    IdAdministrador: number;
    
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
