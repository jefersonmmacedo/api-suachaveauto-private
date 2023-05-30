import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteGuarantorCompanyUseCase } from "./DeleteGuarantorCompanyUseCase";

class DeleteGuarantorCompanyController {
  constructor(private DeleteGuarantorCompanyUseCase: DeleteGuarantorCompanyUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.guarantorCompany.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteGuarantorCompanyController };
