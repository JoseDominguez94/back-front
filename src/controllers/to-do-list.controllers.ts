import {Request, Response} from 'express';
import {ToDoList} from '../models/to-do-list';

class newBooksController {
    public async index (req: Request, res: Response) {
        try {
            const toDo = await ToDoList.findAll({ raw: true })
            res.send(toDo)
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }

        

        
    
    };
    public async destroy (req: Request, res: Response) {

        try{

            const result = await ToDoList.destroy({
                where: {
                    id: req.params.id
                }
            })

            const users = await ToDoList.findAll({ raw: true })
            res.send(users)

        }
        catch(error){

            res.json(error);

        }
    }
    public async create (req: Request, res: Response) {

        try{

            const params = req.body;
            const result = await ToDoList.create(params);
            res.send(result);

        } catch (error) {

            res.json(error)

        }

    }



};
export const booksController = new newBooksController;
