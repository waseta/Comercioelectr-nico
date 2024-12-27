"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
// Crear la aplicación Express
var app = (0, express_1.default)();
// Definir el puerto
var PORT = process.env.PORT || 3000;
// Middleware para servir archivos estáticos
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// Ruta principal
app.get("/", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "public", "index.html"));
});
// Iniciar el servidor
app.listen(PORT, function () {
    console.log("Servidor ejecut\u00E1ndose en http://localhost:".concat(PORT));
});
