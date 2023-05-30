import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { FindNotificationUseCase } from "./FindNotificationUseCase";

class FindNotificationController {
  constructor(private FindNotificationUseCase: FindNotificationUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idAccount = req.params;
   await collections.notification.find(idAccount).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })
  }
}

export { FindNotificationController };
