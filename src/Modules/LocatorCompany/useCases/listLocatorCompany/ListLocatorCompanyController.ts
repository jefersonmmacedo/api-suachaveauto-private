import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListLocatorCompanyUseCase } from "./ListLocatorCompanyUseCase";

class ListLocatorCompanyController {
  constructor(private listLocatorCompanyUseCase: ListLocatorCompanyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.locatorCompany.find().toArray(function(err, result){
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

export { ListLocatorCompanyController };
