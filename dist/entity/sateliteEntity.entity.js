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
exports.tSateliteEntity = void 0;
const typeorm_1 = require("typeorm");
let tSateliteEntity = class tSateliteEntity {
};
exports.tSateliteEntity = tSateliteEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], tSateliteEntity.prototype, "IdSatellite", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], tSateliteEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    __metadata("design:type", Number)
], tSateliteEntity.prototype, "latitud", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    __metadata("design:type", Number)
], tSateliteEntity.prototype, "longitud", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    __metadata("design:type", Number)
], tSateliteEntity.prototype, "temperature", void 0);
exports.tSateliteEntity = tSateliteEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "tsatelite" })
], tSateliteEntity);
//# sourceMappingURL=sateliteEntity.entity.js.map