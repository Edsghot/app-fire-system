"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_module_1 = require("./modulo/usuario/usuario.module");
const mensaje_module_1 = require("./modulo/mensaje/mensaje.module");
const config_1 = require("@nestjs/config");
const cloudinary_module_1 = require("./services/cloudinary/cloudinary.module");
const satelite_module_1 = require("./modulo/satelite/satelite.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'ccontrolz.com',
                port: 3306,
                username: 'nibcqvah_edsghot',
                password: 'Repro123.',
                database: 'nibcqvah_AppFireSystemDb',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true
            }), config_1.ConfigModule.forRoot({ isGlobal: true }), usuario_module_1.UsuarioModule, mensaje_module_1.MensajeModule, cloudinary_module_1.CloudinaryModule, satelite_module_1.SateliteModule],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map