"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensajeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mensaje_entity_1 = require("../../entity/mensaje.entity");
const usuario_entity_1 = require("../../entity/usuario.entity");
const typeorm_2 = require("typeorm");
let MensajeService = class MensajeService {
    constructor(mensajeRepository, usuarioRepository) {
        this.mensajeRepository = mensajeRepository;
        this.usuarioRepository = usuarioRepository;
    }
    async createMensaje(mensaje, url) {
        var u = new mensaje_entity_1.MensajeEntity();
        var res = await this.usuarioRepository.findOne({
            where: { IdUsuario: mensaje.IdUsuario },
        });
        if (!res) {
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
        }
        catch (e) {
            return {
                msg: 'error al registrar el usuario: ' + e,
                succes: false,
            };
        }
    }
};
exports.MensajeService = MensajeService;
exports.MensajeService = MensajeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(mensaje_entity_1.MensajeEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(usuario_entity_1.UsuarioEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], MensajeService);
//# sourceMappingURL=mensaje.service.js.map