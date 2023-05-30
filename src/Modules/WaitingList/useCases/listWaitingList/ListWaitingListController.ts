import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListWaitingListUseCase } from "./ListWaitingListUseCase";

class ListWaitingListController {
  constructor(private listWaitingListUseCase: ListWaitingListUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.waitingList.find().toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListWaitingListController };
