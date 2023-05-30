import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListMessageUserUseCase } from "./ListMessageUserUseCase";

class ListMessageUserController {
  constructor(private listMessageUseCase: ListMessageUserUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idCompany = req.params
   await collections.messagesRooms.find(idCompany).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListMessageUserController };
