import { Request, Response } from "express";


import { DeleteLicensingUseCase } from "./DeleteLicensingUseCase";
import { collections } from "../../../../../services/database.service";

class DeleteLicensingController {
  constructor(private DeleteLicensingUseCase: DeleteLicensingUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.licensing.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteLicensingController };
