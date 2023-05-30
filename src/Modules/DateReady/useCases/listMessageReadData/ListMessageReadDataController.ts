import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListMessageReadDataUseCase } from "./ListMessageReadDataUseCase";

class ListMessageReadDataController {
  constructor(private listMessageReadDataUseCase: ListMessageReadDataUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idUser = req.params;
   await collections.messageReadData.find(idUser).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListMessageReadDataController };
