import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAlertClientUserUseCase } from "./ListAlertClientUserUseCase";

class ListAlertClientUserController {
  constructor(private listAlertClientUseCase: ListAlertClientUserUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const email = req.params
   await collections.alertClient.find(email).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListAlertClientUserController };
