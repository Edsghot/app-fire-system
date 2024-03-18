import { UsuarioService } from './usuario.service';
import { LoginUsuarioDto } from 'src/dto/Usuarios/loginDto.dto';
import { createUsuarioDto } from 'src/dto/Usuarios/createUsuarioDto.dto';
export declare class UsuarioController {
    private usuarioService;
    constructor(usuarioService: UsuarioService);
    getUsers(): Promise<{
        msg: string;
        value: import("src/entity/usuario.entity").UsuarioEntity[];
    }>;
    getById(idUser: number): Promise<{
        msg: string;
        value: import("src/entity/usuario.entity").UsuarioEntity;
    }>;
    createUser(newUser: createUsuarioDto): Promise<{
        msg: string;
        sucess: boolean;
        value?: undefined;
        succes?: undefined;
    } | {
        msg: string;
        value: Promise<import("src/entity/usuario.entity").UsuarioEntity>;
        sucess?: undefined;
        succes?: undefined;
    } | {
        msg: string;
        succes: boolean;
        sucess?: undefined;
        value?: undefined;
    }>;
    loginUser(loginUsuario: LoginUsuarioDto): Promise<{
        msg: string;
        value: import("src/entity/usuario.entity").UsuarioEntity;
    } | {
        msg: string;
        value?: undefined;
    }>;
}
