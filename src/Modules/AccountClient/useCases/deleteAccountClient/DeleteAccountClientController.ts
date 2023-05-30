import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteAccountClientUseCase } from "./DeleteAccountClientUseCase";

class DeleteAccountClientController {
  constructor(private DeleteAccountClientUseCase: DeleteAccountClientUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.account.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteAccountClientController };
