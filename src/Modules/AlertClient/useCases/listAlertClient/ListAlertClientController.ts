import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAlertClientUseCase } from "./ListAlertClientUseCase";

class ListAlertClientController {
  constructor(private listAlertClientUseCase: ListAlertClientUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idProperty = req.params
   await collections.alertClient.find(idProperty).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListAlertClientController };
