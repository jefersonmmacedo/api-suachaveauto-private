import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListEvaluationAllUseCase } from "./ListEvaluationAllUseCase";

class ListEvaluationAllController {
  constructor(private listEvaluationAllUseCase: ListEvaluationAllUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {availability} = req.params;

   await collections.evaluation.find({availability}).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListEvaluationAllController };
