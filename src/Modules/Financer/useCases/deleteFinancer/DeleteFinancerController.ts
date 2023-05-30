import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteFinancerUseCase } from "./DeleteFinancerUseCase";

class DeleteFinancerController {
  constructor(private DeleteFinancerUseCase: DeleteFinancerUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.financer.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteFinancerController };
