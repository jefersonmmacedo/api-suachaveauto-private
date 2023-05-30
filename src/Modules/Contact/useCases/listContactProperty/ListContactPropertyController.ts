import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListContactPropertyUseCase } from "./ListContactPropertyUseCase";

class ListContactPropertyController {
  constructor(private listContactUseCase: ListContactPropertyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idProperty = req.params;
   await collections.contact.find(idProperty).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListContactPropertyController };
