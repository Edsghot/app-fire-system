import { InsertDto } from 'src/dto/Satelite/insert.dto';
import { tSateliteEntity } from 'src/entity/sateliteEntity.entity';
import { Repository } from 'typeorm';
export declare class SateliteService {
    private satelliteRepository;
    constructor(satelliteRepository: Repository<tSateliteEntity>);
    insertarCoordenadas(coord: InsertDto): Promise<{
        msg: string;
        success: boolean;
        detailMsg?: undefined;
        sucess?: undefined;
    } | {
        msg: string;
        detailMsg: any;
        sucess: boolean;
        success?: undefined;
    }>;
    getById(id: number): Promise<{
        value: any;
        msg: string;
    } | {
        value: tSateliteEntity;
        msg?: undefined;
    }>;
    getTest(): Promise<number>;
    getall(): Promise<{
        msg: string;
        value: tSateliteEntity[];
    }>;
    temperaturaAleatorio(): Promise<number>;
}
