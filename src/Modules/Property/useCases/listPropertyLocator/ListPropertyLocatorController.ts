import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPropertyLocatorUseCase } from "./ListPropertyLocatorUseCase";

class ListPropertyLocatorController {
  constructor(private ListPropertyLocatorUseCase: ListPropertyLocatorUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idLocator = req.params;
   await collections.property.find(idLocator).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })
  }
}

export { ListPropertyLocatorController };
