import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteEvaluationUseCase } from "./DeleteEvaluationUseCase";

class DeleteEvaluationController {
  constructor(private DeleteEvaluationUseCase: DeleteEvaluationUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.evaluation.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteEvaluationController };
