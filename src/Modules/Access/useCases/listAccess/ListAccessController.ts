import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAccessUseCase } from "./ListAccessUseCase";

class ListAccessController {
  constructor(private listAccessUseCase: ListAccessUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.access.find().sort( { created_at: -1 } ).limit(20).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListAccessController };
