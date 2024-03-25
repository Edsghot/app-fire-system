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
exports.SateliteController = void 0;
const common_1 = require("@nestjs/common");
const satelite_service_1 = require("./satelite.service");
const insert_dto_1 = require("../../dto/Satelite/insert.dto");
let SateliteController = class SateliteController {
    constructor(sateliteService) {
        this.sateliteService = sateliteService;
    }
    async getCoordenate(coord) {
        return await this.sateliteService.insertarCoordenadas(coord);
    }
    async test() {
        return await this.sateliteService.getTest();
    }
    async getById(id) {
        return await this.sateliteService.getById(id);
    }
};
exports.SateliteController = SateliteController;
__decorate([
    (0, common_1.Post)('/insertar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [insert_dto_1.InsertDto]),
    __metadata("design:returntype", Promise)
], SateliteController.prototype, "getCoordenate", null);
__decorate([
    (0, common_1.Get)('/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SateliteController.prototype, "test", null);
__decorate([
    (0, common_1.Get)('/coordenada/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SateliteController.prototype, "getById", null);
exports.SateliteController = SateliteController = __decorate([
    (0, common_1.Controller)('tsatelite'),
    __metadata("design:paramtypes", [satelite_service_1.SateliteService])
], SateliteController);
//# sourceMappingURL=satelite.controller.js.map