import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAutosCompanyAvailabilityUseCase } from "./ListAutosCompanyAvailabilityUseCase";

class ListAutosCompanyAvailabilityController {
  constructor(private listAutosCompanyUseCase: ListAutosCompanyAvailabilityUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idCompany} = req.params;
    const availability = "Disponível"
   await collections.autos.find({idCompany, availability}).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListAutosCompanyAvailabilityController };
