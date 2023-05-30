import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListEvaluationUseCase } from "./ListEvaluationUseCase";

class ListEvaluationController {
  constructor(private listEvaluationUseCase: ListEvaluationUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idCompany = req.params;

   await collections.evaluation.find(idCompany).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
     // console.log(result)
      return result;
     })

  }
}

export { ListEvaluationController };
