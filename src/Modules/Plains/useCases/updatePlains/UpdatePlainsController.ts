import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdatePlainsUseCase } from "./UpdatePlainsUseCase";

class UpdatePlainsController {
  constructor(private UpdatePlainsUseCase: UpdatePlainsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {name, value, valueNew, status, period, infos, note, emphasis, users,} = req.body;
    const id = req.params; 


    await collections.plains.findOneAndUpdate(id, {$set:{ name, value, valueNew, status, period, infos, note, emphasis, users,}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
     console.log(error);
      return res.status(500)
    })

  }
}

export { UpdatePlainsController };
