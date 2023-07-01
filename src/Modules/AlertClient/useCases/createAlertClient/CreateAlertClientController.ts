import { Request, Response } from "express";

import { CreateAlertClientUseCase } from "./CreateAlertClientUseCase";

class CreateAlertClientController {
  constructor(private createAlertClientUseCase: CreateAlertClientUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idAuto, email, name, whatsapp,  district, city, uf, status, pets, furnished, type, subType, bedroom, suite, restroom, garage, } = req.body;

    this.createAlertClientUseCase.execute({
      id, idAuto, email, name, whatsapp,  district, city, uf, status, pets, furnished, type, subType, bedroom, suite, restroom, garage,
    });


    return res.status(201).json();
  }
}

export { CreateAlertClientController };
