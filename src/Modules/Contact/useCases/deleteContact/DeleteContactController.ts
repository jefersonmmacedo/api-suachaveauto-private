import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteContactUseCase } from "./DeleteContactUseCase";

class DeleteContactController {
  constructor(private DeleteContactUseCase: DeleteContactUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.contact.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteContactController };
