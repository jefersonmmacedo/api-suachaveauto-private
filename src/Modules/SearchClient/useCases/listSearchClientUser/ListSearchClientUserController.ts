import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListSearchClientUserUseCase } from "./ListSearchClientUserUseCase";

class ListSearchClientUserController {
  constructor(private listSearchClientUseCase: ListSearchClientUserUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const email = req.params
   await collections.searchClient.find(email).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListSearchClientUserController };
