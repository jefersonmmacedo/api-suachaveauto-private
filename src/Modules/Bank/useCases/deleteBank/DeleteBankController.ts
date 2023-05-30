import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteBankUseCase } from "./DeleteBankUseCase";

class DeleteBankController {
  constructor(private DeleteBankUseCase: DeleteBankUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.bank.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteBankController };
