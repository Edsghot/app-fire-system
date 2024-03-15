import { createUsuarioDto } from 'src/dto/Usuarios/createUsuarioDto.dto';
import { AdministradorEntity } from 'src/entity/administrador.entity';
import { UsuarioEntity } from 'src/entity/usuario.entity';
import { Repository } from 'typeorm';
import { LoginUsuarioDto } from 'src/dto/Usuarios/loginDto.dto';
import { createAdministradorDto } from 'src/dto/Administrador/createAdministradorDto.dto';
export declare class UsuarioService {
    private userRepository;
    private administradoRepository;
    constructor(userRepository: Repository<UsuarioEntity>, administradoRepository: Repository<AdministradorEntity>);
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
    createAdministrador(user: createAdministradorDto): Promise<{
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
    getById(id: number): Promise<{
        msg: string;
        value: UsuarioEntity;
    }>;
}
