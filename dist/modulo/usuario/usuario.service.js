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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("../../entity/usuario.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let UsuarioService = class UsuarioService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(user) {
        var u = new usuario_entity_1.UsuarioEntity();
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
        }
        catch (e) {
            return {
                msg: 'error al registrar el usuario: ' + e,
                succes: false,
            };
        }
    }
    async loginUser(user) {
        const { Email, Contrasena } = user;
        const existingUser = await this.userRepository.findOne({
            where: { Email },
        });
        const isMatch = await bcrypt.compare(Contrasena, existingUser.Contrasena);
        if (isMatch) {
            return { msg: 'Ingreso correctamente', value: existingUser };
        }
        else {
            return { msg: 'credenciales invalidas' };
        }
    }
    async getAllUser() {
        return {
            msg: 'Lista de Usuarios',
            value: await this.userRepository.find(),
        };
    }
    async getById(id) {
        return {
            msg: 'Lista de Usuarios',
            value: await this.userRepository.findOne({ where: { IdUsuario: id } }),
        };
    }
};
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.UsuarioEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuarioService);
//# sourceMappingURL=usuario.service.js.map