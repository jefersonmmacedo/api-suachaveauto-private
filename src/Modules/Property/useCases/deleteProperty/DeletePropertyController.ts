import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeletePropertyUseCase } from "./DeletePropertyUseCase";

class DeletePropertyController {
  constructor(private DeletePropertyUseCase: DeletePropertyUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.property.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeletePropertyController };
