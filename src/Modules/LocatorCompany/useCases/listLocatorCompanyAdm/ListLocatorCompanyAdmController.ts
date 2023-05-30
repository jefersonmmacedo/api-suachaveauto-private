import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListLocatorCompanyAdmUseCase } from "./ListLocatorCompanyAdmUseCase";

class ListLocatorCompanyAdmController {
  constructor(private ListLocatorCompanyAdmUseCase: ListLocatorCompanyAdmUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idCompany = req.params;
   await collections.locatorCompany.find(idCompany).toArray(function(err, result){
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

export { ListLocatorCompanyAdmController };
