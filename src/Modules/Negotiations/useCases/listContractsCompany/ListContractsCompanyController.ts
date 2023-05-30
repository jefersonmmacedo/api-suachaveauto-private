import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListContractsCompanyUseCase } from "./ListContractsCompanyUseCase";

class ListContractsCompanyController {
  constructor(private listContractsCompanyUseCase: ListContractsCompanyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idCompany = req.params;
    console.log(idCompany);
   await collections.contracts.find(idCompany).toArray(function(err, result){
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

export { ListContractsCompanyController };
