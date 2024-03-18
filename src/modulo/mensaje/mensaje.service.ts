import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActualizarEstadoDto } from 'src/dto/Mensajes/actualizarEstado.dto';
import { createMensajeDto } from 'src/dto/Mensajes/createMensajeDto.dto';
import { MensajeEntity } from 'src/entity/mensaje.entity';
import { UsuarioEntity } from 'src/entity/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MensajeService {
    constructor(
        @InjectRepository(MensajeEntity)
        private mensajeRepository: Repository<MensajeEntity>,@InjectRepository(UsuarioEntity)
        private usuarioRepository: Repository<UsuarioEntity>){}

        async createMensaje(mensaje: createMensajeDto,url: string) {
            var u = new MensajeEntity();
            
            
            var res = await this.usuarioRepository.findOne({
            where: { IdUsuario: mensaje.IdUsuario },
            });

            if(!res){
                return {
                    msg: 'Error al con la validacion del usuario, intente de nuevo'
                };
            }

            u.Descripcion = mensaje.Descripcion;
            u.Latitud = mensaje.Latitud;
            u.Longitud = mensaje.Longitud;
            u.Estado = 0;
            u.IdUsuario = res;
            u.Imagen = url;
            u.Fecha = new Date();
        
            try {
              const newMensaje = this.mensajeRepository.create(u);
              return {
                msg: 'Se creo correctamente',
                value: this.mensajeRepository.save(newMensaje),
              };
            } catch (e) {
              return {
                msg: 'error al registrar el usuario: ' + e,
                succes: false,
              };
            }
          }
          
          async actualizar(request: ActualizarEstadoDto){

            var mensajeEncontrado = await this.mensajeRepository.findOne({where: {IdMensaje: request.IdMensaje}})

            if(!mensajeEncontrado){
                return {msg: "No se encontro el mensaje, intente de nuevo"}
            }

            mensajeEncontrado.Estado = request.Estado;

            try{
                
                await this.mensajeRepository.save(mensajeEncontrado);
                return {msg: "Se actualizo correctamente",value: mensajeEncontrado}
            }catch(e){
                return {msg: 'error al actualizar el mensaje'}
            }
        }

        async eliminarMensaje(id: number){

            var mensaje = await this.mensajeRepository.findBy({IdMensaje:id});

            if(!mensaje){
                
            }
        }
}
