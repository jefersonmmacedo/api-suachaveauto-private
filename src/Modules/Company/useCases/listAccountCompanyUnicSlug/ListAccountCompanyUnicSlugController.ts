import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListCompanyUnicSlugUseCase } from "./ListAccountCompanyUnicSlugUseCase";

class ListCompanyUnicSlugController {
  constructor(private ListCompanyUnicSlugUseCase: ListCompanyUnicSlugUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {nameSlug} = req.params;
   await collections.company.find({nameSlug}).toArray(function(err, result){
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

export { ListCompanyUnicSlugController };
