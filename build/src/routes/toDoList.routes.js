"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const to_do_list_controllers_1 = require("../controllers/to-do-list.controllers");
class ToDoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.router.get('/', to_do_list_controllers_1.ToDoListController.index);
        this.router.delete('/', to_do_list_controllers_1.ToDoListController.destroy);
        this.router.post('/', to_do_list_controllers_1.ToDoListController.create);
    }
}
;
const toDoRoutes = new ToDoRoutes();
exports.default = toDoRoutes;
