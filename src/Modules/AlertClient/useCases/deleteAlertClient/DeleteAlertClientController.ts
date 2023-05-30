import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteAlertClientUseCase } from "./DeleteAlertClientUseCase";

class DeleteAlertClientController {
  constructor(private DeleteAlertClientUseCase: DeleteAlertClientUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.alertClient.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteAlertClientController };
