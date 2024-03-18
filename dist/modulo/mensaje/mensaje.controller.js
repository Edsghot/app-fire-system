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
exports.MensajeController = void 0;
const common_1 = require("@nestjs/common");
const mensaje_service_1 = require("./mensaje.service");
const platform_express_1 = require("@nestjs/platform-express");
const createMensajeDto_dto_1 = require("../../dto/Mensajes/createMensajeDto.dto");
const cloudinary_service_1 = require("../../services/cloudinary/cloudinary.service");
const actualizarEstado_dto_1 = require("../../dto/Mensajes/actualizarEstado.dto");
let MensajeController = class MensajeController {
    constructor(mensajeService, cloudinaryService) {
        this.mensajeService = mensajeService;
        this.cloudinaryService = cloudinaryService;
    }
    async insertar(mensaje, file) {
        var res = this.cloudinaryService.uploadFile(file, "incendios");
        return await this.mensajeService.createMensaje(mensaje, (await res).secure_url);
    }
    async actualizarMensaje(actualizar) {
        return await this.actualizarMensaje(actualizar);
    }
    async eliminarMensaje(id) {
        return await this.eliminarMensaje(id);
    }
    async reporteMensaje(id) {
        return await this.reporteMensaje(id);
    }
};
exports.MensajeController = MensajeController;
__decorate([
    (0, common_1.Post)('insert'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createMensajeDto_dto_1.createMensajeDto, Object]),
    __metadata("design:returntype", Promise)
], MensajeController.prototype, "insertar", null);
__decorate([
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [actualizarEstado_dto_1.ActualizarEstadoDto]),
    __metadata("design:returntype", Promise)
], MensajeController.prototype, "actualizarMensaje", null);
__decorate([
    (0, common_1.Delete)('delete'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MensajeController.prototype, "eliminarMensaje", null);
__decorate([
    (0, common_1.Get)('reporte'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MensajeController.prototype, "reporteMensaje", null);
exports.MensajeController = MensajeController = __decorate([
    (0, common_1.Controller)('mensaje'),
    __metadata("design:paramtypes", [mensaje_service_1.MensajeService, cloudinary_service_1.CloudinaryService])
], MensajeController);
//# sourceMappingURL=mensaje.controller.js.map