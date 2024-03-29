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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensajeEntity = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("./usuario.entity");
var estado;
(function (estado) {
    estado[estado["ACTIVO"] = 0] = "ACTIVO";
    estado[estado["ENCAMINO"] = 1] = "ENCAMINO";
    estado[estado["CONTROLADO"] = 2] = "CONTROLADO";
})(estado || (estado = {}));
let MensajeEntity = class MensajeEntity {
};
exports.MensajeEntity = MensajeEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MensajeEntity.prototype, "IdMensaje", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MensajeEntity.prototype, "Imagen", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MensajeEntity.prototype, "Descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MensajeEntity.prototype, "Latitud", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MensajeEntity.prototype, "Estado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], MensajeEntity.prototype, "Fecha", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MensajeEntity.prototype, "Longitud", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.UsuarioEntity, usuarioEntity => usuarioEntity.IdUsuario),
    (0, typeorm_1.JoinColumn)({ name: 'IdUsuario' }),
    __metadata("design:type", usuario_entity_1.UsuarioEntity)
], MensajeEntity.prototype, "IdUsuario", void 0);
exports.MensajeEntity = MensajeEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'tMensaje' })
], MensajeEntity);
//# sourceMappingURL=mensaje.entity.js.map