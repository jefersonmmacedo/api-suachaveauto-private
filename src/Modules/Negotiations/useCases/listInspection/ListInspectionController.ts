import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListInspectionUseCase } from "./ListInspectionUseCase";

class ListInspectionController {
  constructor(private listInspectionUseCase: ListInspectionUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idNegotiations = req.params;
   await collections.inspection.find(idNegotiations).toArray(function(err, result){
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

export { ListInspectionController };
