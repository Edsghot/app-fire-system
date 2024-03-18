import { createUsuarioDto } from 'src/dto/Usuarios/createUsuarioDto.dto';
import { UsuarioEntity } from 'src/entity/usuario.entity';
import { Repository } from 'typeorm';
import { LoginUsuarioDto } from 'src/dto/Usuarios/loginDto.dto';
export declare class UsuarioService {
    private userRepository;
    constructor(userRepository: Repository<UsuarioEntity>);
    createUser(user: createUsuarioDto): Promise<{
        msg: string;
        sucess: boolean;
        value?: undefined;
        succes?: undefined;
    } | {
        msg: string;
        value: Promise<UsuarioEntity>;
        sucess?: undefined;
        succes?: undefined;
    } | {
        msg: string;
        succes: boolean;
        sucess?: undefined;
        value?: undefined;
    }>;
    loginUser(user: LoginUsuarioDto): Promise<{
        msg: string;
        value: UsuarioEntity;
    } | {
        msg: string;
        value?: undefined;
    }>;
    getAllUser(): Promise<{
        msg: string;
        value: UsuarioEntity[];
    }>;
    getById(id: number): Promise<{
        msg: string;
        value: UsuarioEntity;
    }>;
}
