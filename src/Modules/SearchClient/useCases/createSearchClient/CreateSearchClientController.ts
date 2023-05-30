import { Request, Response } from "express";

import { CreateSearchClientUseCase } from "./CreateSearchClientUseCase";

class CreateSearchClientController {
  constructor(private createSearchClientUseCase: CreateSearchClientUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, email, name, whatsapp,  district, city, uf, status, pets, furnished, type, subType, bedroom, suite, restroom, garage, } = req.body;

    this.createSearchClientUseCase.execute({
      id, email, name, whatsapp,  district, city, uf, status, pets, furnished, type, subType, bedroom, suite, restroom, garage,
    });


    return res.status(201).json();
  }
}

export { CreateSearchClientController };
