import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListGuarantorCompanyUseCase } from "./ListGuarantorCompanyUseCase";

class ListGuarantorCompanyController {
  constructor(private listGuarantorCompanyUseCase: ListGuarantorCompanyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
await collections.guarantorCompany.find().toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListGuarantorCompanyController };
