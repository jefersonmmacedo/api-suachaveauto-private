import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateRoomReadDataUseCase } from "./UpdateRoomReadDataUseCase";
import { hash } from "bcrypt";

class UpdateRoomReadDataController {
  constructor(private UpdatStatusUseCase: UpdateRoomReadDataUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { dateReady} = req.body;
    const id = req.params; 

    console.log(dateReady)

    await collections.roomReadData.findOneAndUpdate(id, {$set:{dateReady}}, {upsert: true}).then((result) => {
      console.log("Status atualizada com sucesso")
      return res.status(201).json(result);

    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateRoomReadDataController };
