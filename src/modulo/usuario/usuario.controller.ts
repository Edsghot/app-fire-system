import { Controller } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { LoginUsuarioDto } from 'src/dto/Usuarios/loginDto.dto';
import { createUsuarioDto } from 'src/dto/Usuarios/createUsuarioDto.dto';

@Controller('usuario')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService){}

    
  @Get()
  async getUsers() {
    return await this.usuarioService.getAllUser();
  }
  @Get(':idUser') 
  getById(@Param('idUser') idUser: number) {
    return this.usuarioService.getById(idUser); 
  }

  @Post('insert')
  createUser(@Body() newUser: createUsuarioDto) {
    return this.usuarioService.createUser(newUser);
  }
  @Post('login')
  async loginUser(@Body() loginUsuario: LoginUsuarioDto) {
    return await this.usuarioService.loginUser(loginUsuario);
  }

}
