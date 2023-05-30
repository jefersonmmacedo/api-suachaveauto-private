import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListSchedulingEvaluationUnicCompanyUseCase } from "./ListSchedulingEvaluationUnicCompanyUseCase";

class ListSchedulingEvaluationUnicCompanyController {
  constructor(private ListSchedulingEvaluationUnicCompanyUseCase: ListSchedulingEvaluationUnicCompanyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idClient = req.params;
   await collections.schedulingEvaluation.find(idClient).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
    //  console.log(result)
      return result;
     })
  }
}

export { ListSchedulingEvaluationUnicCompanyController };
