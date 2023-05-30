import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListDeletedClientUseCase } from "./ListDeletedClientUseCase";

class ListDeletedClientController {
  constructor(private listDeletedClientUseCase: ListDeletedClientUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.deletedClient.find().sort( { created_at: -1 } ).limit(20).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListDeletedClientController };
