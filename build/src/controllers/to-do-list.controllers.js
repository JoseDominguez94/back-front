"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoListController = void 0;
const to_do_list_1 = require("../models/to-do-list");
class toDoListController {
    async index(req, res) {
        try {
            const toDo = await to_do_list_1.ToDoList.findAll({ raw: true });
            res.send(toDo);
        }
        catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
    ;
    async destroy(req, res) {
        try {
            const result = await to_do_list_1.ToDoList.destroy({
                where: {
                    id: req.params.id
                }
            });
            const users = await to_do_list_1.ToDoList.findAll({ raw: true });
            res.send(users);
        }
        catch (error) {
            res.json(error);
        }
    }
    async create(req, res) {
        try {
            const params = req.body;
            const result = await to_do_list_1.ToDoList.create(params);
            res.send(result);
        }
        catch (error) {
            res.json(error);
        }
    }
}
;
exports.ToDoListController = new toDoListController;
