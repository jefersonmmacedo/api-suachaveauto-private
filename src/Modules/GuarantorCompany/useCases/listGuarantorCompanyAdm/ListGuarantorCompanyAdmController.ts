import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListGuarantorCompanyAdmUseCase } from "./ListGuarantorCompanyAdmUseCase";

class ListGuarantorCompanyAdmController {
  constructor(private ListGuarantorCompanyAdmUseCase: ListGuarantorCompanyAdmUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idCompany = req.params;
   await collections.guarantorCompany.find(idCompany).toArray(function(err, result){
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

export { ListGuarantorCompanyAdmController };
