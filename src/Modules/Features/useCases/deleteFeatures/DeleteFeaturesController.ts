import { Request, Response } from "express";


import { DeleteFeaturesUseCase } from "./DeleteFeaturesUseCase";
import { collections } from "../../../../../services/database.service";

class DeleteFeaturesController {
  constructor(private DeleteFeaturesUseCase: DeleteFeaturesUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.features.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteFeaturesController };
