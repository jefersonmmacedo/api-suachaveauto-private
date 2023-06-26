import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteAutosUseCase } from "./DeleteAutosUseCase";

class DeleteAutosController {
  constructor(private DeleteAutosUseCase: DeleteAutosUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.autos.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteAutosController };
