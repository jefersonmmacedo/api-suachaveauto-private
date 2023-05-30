import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteClientCompanyUseCase } from "./DeleteClientCompanyUseCase";

class DeleteClientCompanyController {
  constructor(private DeleteClientCompanyUseCase: DeleteClientCompanyUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.clientCompany.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteClientCompanyController };
