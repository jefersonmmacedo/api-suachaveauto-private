import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateMessageReadDataUseCase } from "./UpdateMessageReadDataUseCase";
import { hash } from "bcrypt";

class UpdateMessageReadDataController {
  constructor(private UpdatStatusUseCase: UpdateMessageReadDataUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { dateReady} = req.body;
    const id = req.params; 

    console.log(dateReady)

    await collections.messageReadData.findOneAndUpdate(id, {$set:{dateReady}}, {upsert: true}).then((result) => {
      console.log("Status atualizada com sucesso")
      return res.status(201).json(result);

    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateMessageReadDataController };
