import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPropertyChargesAdmUseCase } from "./ListPropertyChargesAdmUseCase";

class ListPropertyChargesAdmController {
  constructor(private ListPropertyChargesAdmUseCase: ListPropertyChargesAdmUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idCompany = req.params;
   await collections.propertyCharges.find(idCompany).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
    //  console.log(result)
      return result;
     })
  }
}

export { ListPropertyChargesAdmController };
