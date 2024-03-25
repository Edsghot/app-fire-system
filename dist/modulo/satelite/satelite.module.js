"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SateliteModule = void 0;
const common_1 = require("@nestjs/common");
const satelite_controller_1 = require("./satelite.controller");
const satelite_service_1 = require("./satelite.service");
const typeorm_1 = require("@nestjs/typeorm");
const sateliteEntity_entity_1 = require("../../entity/sateliteEntity.entity");
let SateliteModule = class SateliteModule {
};
exports.SateliteModule = SateliteModule;
exports.SateliteModule = SateliteModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([sateliteEntity_entity_1.tSateliteEntity]),
        ],
        controllers: [satelite_controller_1.SateliteController],
        providers: [satelite_service_1.SateliteService]
    })
], SateliteModule);
//# sourceMappingURL=satelite.module.js.map