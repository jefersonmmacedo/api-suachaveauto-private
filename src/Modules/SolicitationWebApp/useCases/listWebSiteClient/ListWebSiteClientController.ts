import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListWebSiteClientUseCase } from "./ListWebSiteClientUseCase";

class ListWebSiteClientController {
  constructor(private listWebSiteClientUseCase: ListWebSiteClientUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {

   await collections.webSiteClient.find({}).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListWebSiteClientController };
