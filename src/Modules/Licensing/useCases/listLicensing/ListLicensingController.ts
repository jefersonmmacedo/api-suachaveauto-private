import { Request, Response } from "express";

import { ListLicensingUseCase } from "./ListLicensingUseCase";
import { collections } from "../../../../../services/database.service";

class ListLicensingController {
  constructor(private listLicensingUseCase: ListLicensingUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.licensing.find().toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListLicensingController };
