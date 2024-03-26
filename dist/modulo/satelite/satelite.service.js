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
exports.SateliteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sateliteEntity_entity_1 = require("../../entity/sateliteEntity.entity");
const typeorm_2 = require("typeorm");
let SateliteService = class SateliteService {
    constructor(satelliteRepository) {
        this.satelliteRepository = satelliteRepository;
    }
    async insertarCoordenadas(coord) {
        var u = new sateliteEntity_entity_1.tSateliteEntity();
        try {
            u.date = new Date();
            u.latitud = coord.latitud;
            u.longitud = coord.longitud;
            u.temperature = coord.temperature;
            const newSatellite = this.satelliteRepository.create(u);
            await this.satelliteRepository.save(newSatellite);
            return { msg: 'se inserto correctamente', success: true };
        }
        catch (error) {
            return { msg: 'error: ', detailMsg: error, sucess: false };
        }
    }
    async getById(id) {
        var satellite = await this.satelliteRepository.findOne({ where: { IdSatellite: id } });
        if (!satellite) {
            return { value: null, msg: "No existe ningun dato" };
        }
        return { value: satellite };
    }
    async getTest() {
        return this.temperaturaAleatorio();
    }
    async getall() {
        var res = await this.satelliteRepository.find();
        return { msg: 'lista de getall', value: res };
    }
    async temperaturaAleatorio() {
        return Math.random() * (100 - 40) + 40;
    }
};
exports.SateliteService = SateliteService;
exports.SateliteService = SateliteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sateliteEntity_entity_1.tSateliteEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SateliteService);
//# sourceMappingURL=satelite.service.js.map