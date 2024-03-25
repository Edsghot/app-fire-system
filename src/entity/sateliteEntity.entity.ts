import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tsatelite"})
export class tSateliteEntity{

    @PrimaryGeneratedColumn()
    IdSatellite: number;

    @Column()
    date: Date;

    @Column({type: "float"})
    latitud: number;

    @Column({type: "float"})
    longitud: number;

    @Column({type: "float"})
    temperature: number;

}