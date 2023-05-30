import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListWebSiteClientCompanyUseCase } from "./ListWebSiteClientCompanyUseCase";

class ListWebSiteClientCompanyController {
  constructor(private listWebSiteClientUseCase: ListWebSiteClientCompanyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idCompany = req.params;
   await collections.webSiteClient.find(idCompany).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListWebSiteClientCompanyController };
