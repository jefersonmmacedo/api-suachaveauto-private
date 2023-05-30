import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAlertClientMatchUseCase } from "./ListAlertClientMatchUseCase";

class ListAlertClientMatchController {
  constructor(private listAlertClientUseCase: ListAlertClientMatchUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {


   await collections.alertClient.find().sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListAlertClientMatchController };
