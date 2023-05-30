import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteNegotiationsUseCase } from "./DeleteNegotiationsUseCase";

class DeleteNegotiationsController {
  constructor(private DeleteNegotiationsUseCase: DeleteNegotiationsUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.negotiations.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteNegotiationsController };
