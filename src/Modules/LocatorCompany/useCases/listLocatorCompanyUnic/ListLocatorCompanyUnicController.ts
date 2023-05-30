import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListLocatorCompanyUnicUseCase } from "./ListLocatorCompanyUnicUseCase";

class ListLocatorCompanyUnicController {
  constructor(private ListLocatorCompanyUnicUseCase: ListLocatorCompanyUnicUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const id = req.params;
   await collections.locatorCompany.find(id).toArray(function(err, result){
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

export { ListLocatorCompanyUnicController };
