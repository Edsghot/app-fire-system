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
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("./usuario.service");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const common_4 = require("@nestjs/common");
const common_5 = require("@nestjs/common");
const loginDto_dto_1 = require("../../dto/Usuarios/loginDto.dto");
const createUsuarioDto_dto_1 = require("../../dto/Usuarios/createUsuarioDto.dto");
let UsuarioController = class UsuarioController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    async getUsers() {
        return await this.usuarioService.getAllUser();
    }
    getById(idUser) {
        return this.usuarioService.getById(idUser);
    }
    createUser(newUser) {
        return this.usuarioService.createUser(newUser);
    }
    async loginUser(loginUsuario) {
        return await this.usuarioService.loginUser(loginUsuario);
    }
};
exports.UsuarioController = UsuarioController;
__decorate([
    (0, common_2.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "getUsers", null);
__decorate([
    (0, common_2.Get)(':idUser'),
    __param(0, (0, common_3.Param)('idUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "getById", null);
__decorate([
    (0, common_4.Post)('insert'),
    __param(0, (0, common_5.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUsuarioDto_dto_1.createUsuarioDto]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "createUser", null);
__decorate([
    (0, common_4.Post)('login'),
    __param(0, (0, common_5.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginDto_dto_1.LoginUsuarioDto]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "loginUser", null);
exports.UsuarioController = UsuarioController = __decorate([
    (0, common_1.Controller)('usuario'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
//# sourceMappingURL=usuario.controller.js.map