import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteContractsUseCase } from "./DeleteContractsUseCase";

class DeleteContractsController {
  constructor(private DeleteContractsUseCase: DeleteContractsUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.contracts.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteContractsController };
