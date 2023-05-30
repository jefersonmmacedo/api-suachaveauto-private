import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListDeletedClientUserUseCase } from "./ListDeletedClientUserUseCase";

class ListDeletedClientUserController {
  constructor(private listDeletedClientUseCase: ListDeletedClientUserUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idClient = req.params
   await collections.deletedClient.find(idClient).sort( { created_at: -1 } ).limit(20).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListDeletedClientUserController };
