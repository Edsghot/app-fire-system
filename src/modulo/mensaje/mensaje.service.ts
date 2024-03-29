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
                msg: 'error al registrar el usuario: ' , detailMsg: e,
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
                return {msg: 'error al actualizar el mensaje', detailMsg: e}
            }
        }

        async eliminarMensaje(id: number){

            var mensaje = await this.mensajeRepository.findOne({where: {IdMensaje:id}});

            if(!mensaje){
                return {msg:  "Error al eliminar no se encontro el mensaje a eliminar"}
            }

            try{

              await this.mensajeRepository.delete(mensaje);
              return {msg: "se elimino correctamente"}
            }catch(e){
              return {msg: "error al eliminar", detailMsg: e}
            }

        }

        async reporteUsuario(id: number) {
         try{
          var res = await this.mensajeRepository.query(`call SP_MensajeUsuarioFechaReciente(${id})`);
          return {msg: "consulta correcta", value: res[0]}
         }catch(e){
          return {msg: "error al consultar", detalle: e}
         }
        }

      async getall(){
        return await this.mensajeRepository.find();
     }
        
}
