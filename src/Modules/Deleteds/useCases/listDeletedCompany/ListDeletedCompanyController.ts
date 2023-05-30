import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListDeletedCompanyUseCase } from "./ListDeletedCompanyUseCase";

class ListDeletedCompanyController {
  constructor(private listDeletedCompanyUseCase: ListDeletedCompanyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.deletedCompany.find().sort( { created_at: -1 } ).limit(20).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListDeletedCompanyController };
