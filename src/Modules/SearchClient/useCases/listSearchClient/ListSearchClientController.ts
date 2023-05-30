import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListSearchClientUseCase } from "./ListSearchClientUseCase";

class ListSearchClientController {
  constructor(private listSearchClientUseCase: ListSearchClientUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.searchClient.find().toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListSearchClientController };
