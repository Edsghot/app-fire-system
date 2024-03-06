import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createUsuarioDto } from 'src/dto/Usuarios/createUserDto.dto';
import { AdministradorEntity } from 'src/entity/administrador.entity';
import { UsuarioEntity } from 'src/entity/usuario.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { loginUserDto } from 'src/dto/Usuarios/loginDto.dto';
import { createAdministradorDto } from 'src/dto/Administrador/createAdministradorDto.dto';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private userRepository: Repository<UsuarioEntity>,
        @InjectRepository(AdministradorEntity)
        private administradoRepository: Repository<AdministradorEntity>,
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

      async loginUser(user: loginUserDto) {
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

      async createAdministrador(user: createAdministradorDto) {
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

      async loginUser(user: loginUserDto) {
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


}
