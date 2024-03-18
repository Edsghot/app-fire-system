"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensajeModule = void 0;
const common_1 = require("@nestjs/common");
const mensaje_controller_1 = require("./mensaje.controller");
const mensaje_service_1 = require("./mensaje.service");
const typeorm_1 = require("@nestjs/typeorm");
const mensaje_entity_1 = require("../../entity/mensaje.entity");
const usuario_entity_1 = require("../../entity/usuario.entity");
const cloudinary_service_1 = require("../../services/cloudinary/cloudinary.service");
let MensajeModule = class MensajeModule {
};
exports.MensajeModule = MensajeModule;
exports.MensajeModule = MensajeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([mensaje_entity_1.MensajeEntity]), typeorm_1.TypeOrmModule.forFeature([usuario_entity_1.UsuarioEntity])
        ],
        controllers: [mensaje_controller_1.MensajeController],
        providers: [mensaje_service_1.MensajeService, cloudinary_service_1.CloudinaryService]
    })
], MensajeModule);
//# sourceMappingURL=mensaje.module.js.map