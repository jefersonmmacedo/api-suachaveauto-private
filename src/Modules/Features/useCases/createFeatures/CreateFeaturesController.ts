import { Request, Response } from "express";

import { CreateFeaturesUseCase } from "./CreateFeaturesUseCase";

class CreateFeaturesController {
  constructor(private createFeaturesUseCase: CreateFeaturesUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, feature } = req.body;

    this.createFeaturesUseCase.execute({
      id, feature
    });


    return res.status(201).json();
  }
}

export { CreateFeaturesController };
