import { Request, Response } from "express";

import { ListFeaturesUseCase } from "./ListFeaturesUseCase";
import { collections } from "../../../../../services/database.service";

class ListFeaturesController {
  constructor(private listFeaturesUseCase: ListFeaturesUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.features.find().toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListFeaturesController };
