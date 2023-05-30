import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPropertyChargesLocatorUseCase } from "./ListPropertyChargesLocatorUseCase";

class ListPropertyChargesLocatorController {
  constructor(private ListPropertyChargesLocatorUseCase: ListPropertyChargesLocatorUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idLocator = req.params;
   await collections.propertyCharges.find(idLocator).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
     // console.log(result)
      return result;
     })
  }
}

export { ListPropertyChargesLocatorController };
