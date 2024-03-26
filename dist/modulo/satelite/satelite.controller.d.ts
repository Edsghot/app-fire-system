import { SateliteService } from './satelite.service';
import { InsertDto } from 'src/dto/Satelite/insert.dto';
export declare class SateliteController {
    private sateliteService;
    constructor(sateliteService: SateliteService);
    getCoordenate(coord: InsertDto): Promise<{
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
    test(): Promise<number>;
    getById(id: number): Promise<{
        value: any;
        msg: string;
    } | {
        value: import("src/entity/sateliteEntity.entity").tSateliteEntity;
        msg?: undefined;
    }>;
    getall(): Promise<{
        msg: string;
        value: import("src/entity/sateliteEntity.entity").tSateliteEntity[];
    }>;
}
