import { Request, Response } from "express";

import { CreateViewPropertyUseCase } from "./CreateViewPropertyUseCase";

class CreateViewPropertyController {
  constructor(private createViewPropertyUseCase: CreateViewPropertyUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idProperty, idClient, idCompany, origin, latitude, longitude, type, subType, } = req.body;

    this.createViewPropertyUseCase.execute({
      id, idProperty, idClient, idCompany, origin, latitude, longitude, type, subType,
    });


    return res.status(201).json();
  }
}

export { CreateViewPropertyController };
