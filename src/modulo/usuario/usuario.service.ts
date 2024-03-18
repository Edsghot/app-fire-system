import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createUsuarioDto } from 'src/dto/Usuarios/createUsuarioDto.dto';
import { UsuarioEntity } from 'src/entity/usuario.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginUsuarioDto } from 'src/dto/Usuarios/loginDto.dto';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private userRepository: Repository<UsuarioEntity>
      ) {}

      async createUser(user: createUsuarioDto) {
        var u = new UsuarioEntity();
    
        var res = await this.userRepository.findOne({
          where: { Email: user.Email },
        });
    
        if (res != null) {
          return {
            msg: 'Ya existe registrado el correo, pruebe otro',
            sucess: false,
          };
        }
    
        const hashPassword = await bcrypt.hash(user.Contrasena, 10);

        u.Email = user.Email;
        u.Contrasena = hashPassword;
        u.Nombre = user.Nombre;
        u.Apellido = user.Apellido;
        u.Telefono = user.Telefono;
    
        try {
          const newUser = this.userRepository.create(u);
          return {
            msg: 'Se creo correctamente',
            value: this.userRepository.save(newUser),
          };
        } catch (e) {
          return {
            msg: 'error al registrar el usuario: ' + e,
            succes: false,
          };
        }
      }

      async loginUser(user: LoginUsuarioDto) {
        const { Email, Contrasena } = user;
    
        const existingUser = await this.userRepository.findOne({
          where: { Email },
        });
    
        const isMatch = await bcrypt.compare(Contrasena, existingUser.Contrasena);
    
        if (isMatch) {
          return { msg: 'Ingreso correctamente', value: existingUser };
        } else {
          return { msg: 'credenciales invalidas' };
        }
      }
      async getAllUser() {
        return {
          msg: 'Lista de Usuarios',
          value: await this.userRepository.find(),
        };
      }

      async getById( id:number) {
        return {
          msg: 'Lista de Usuarios',
          value: await this.userRepository.findOne({where: {IdUsuario: id}}),
        };
      }


}
