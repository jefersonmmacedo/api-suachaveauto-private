import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListWaitingListUserUseCase } from "./ListWaitingListUserUseCase";

class ListWaitingListUserController {
  constructor(private listWaitingListUseCase: ListWaitingListUserUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idClient = req.params
   await collections.waitingList.find(idClient).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListWaitingListUserController };
