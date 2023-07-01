import { Request, Response } from "express";

import { CreateViewAutoUseCase } from "./CreateViewAutoUseCase";

class CreateViewAutoController {
  constructor(private createViewAutoUseCase: CreateViewAutoUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idAuto, idClient, idCompany, origin, latitude, longitude, brand, model, } = req.body;

    this.createViewAutoUseCase.execute({
      id, idAuto, idClient, idCompany, origin, latitude, longitude, brand, model,
    });


    return res.status(201).json();
  }
}

export { CreateViewAutoController };
