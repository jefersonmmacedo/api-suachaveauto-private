import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteCompanyUseCase } from "./DeleteCompanyUseCase";

class DeleteCompanyController {
  constructor(private DeleteCompanyUseCase: DeleteCompanyUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.company.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteCompanyController };
