import { AdministradorEntity } from 'src/entity/administrador.entity';
import { UsuarioEntity } from 'src/entity/usuario.entity';
import { Repository } from 'typeorm';
export declare class UsuarioService {
    private userRepository;
    private administradoRepository;
    constructor(userRepository: Repository<UsuarioEntity>, administradoRepository: Repository<AdministradorEntity>);
}
