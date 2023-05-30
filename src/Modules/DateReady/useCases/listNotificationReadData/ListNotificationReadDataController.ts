import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListNotificationReadDataUseCase } from "./ListNotificationReadDataUseCase";

class ListNotificationReadDataController {
  constructor(private listNotificationReadDataUseCase: ListNotificationReadDataUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idUser = req.params;
   await collections.notificationReadData.find(idUser).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListNotificationReadDataController };
