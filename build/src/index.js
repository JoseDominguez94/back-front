"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.set('port', 3000);
app.use(express_1.default.json());
// app.use('/', toDoRoutes.router);
app.get('/', (req, res) => {
    console.log('ruta base');
    res.send('Heyy');
});
app.listen(app.get('port'), () => {
    console.log(`Server is runing PPP`);
});
