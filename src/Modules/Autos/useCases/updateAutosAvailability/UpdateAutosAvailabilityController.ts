import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateAutosAvailabilityUseCase } from "./UpdateAutosAvailabilityUseCase";
import { hash } from "bcrypt";

class UpdateAutosAvailabilityController {
  constructor(private UpdatAutosUseCase: UpdateAutosAvailabilityUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { availability } = req.body;
    const id = req.params; 

    await collections.autos.findOneAndUpdate(id, {$set:{ availability }}, {upsert: true}).then((result) => {
      console.log("Status atualizada com sucesso")
      return res.status(201).json(result);

    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateAutosAvailabilityController };
