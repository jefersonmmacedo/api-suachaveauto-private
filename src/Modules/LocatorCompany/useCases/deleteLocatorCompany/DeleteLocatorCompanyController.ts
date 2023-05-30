import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteLocatorCompanyUseCase } from "./DeleteLocatorCompanyUseCase";

class DeleteLocatorCompanyController {
  constructor(private DeleteLocatorCompanyUseCase: DeleteLocatorCompanyUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.locatorCompany.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteLocatorCompanyController };
