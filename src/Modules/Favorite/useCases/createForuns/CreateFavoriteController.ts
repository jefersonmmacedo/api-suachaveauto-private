import { Request, Response } from "express";

import { CreateFavoriteUseCase } from "./CreateFavoriteUseCase";

class CreateFavoriteController {
  constructor(private createFavoriteUseCase: CreateFavoriteUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idCompany, idAuto, idClient } = req.body;

    this.createFavoriteUseCase.execute({
      id, idCompany, idAuto, idClient
    });

    return res.status(201).json();
  }
}

export { CreateFavoriteController };
