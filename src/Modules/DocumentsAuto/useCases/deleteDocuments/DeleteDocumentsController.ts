import { Request, Response } from "express";


import { DeleteDocumentsUseCase } from "./DeleteDocumentsUseCase";
import { collections } from "../../../../../services/database.service";

class DeleteDocumentsController {
  constructor(private DeleteDocumentsUseCase: DeleteDocumentsUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.documentAuto.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteDocumentsController };
