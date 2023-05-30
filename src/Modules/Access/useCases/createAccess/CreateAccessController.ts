import { Request, Response } from "express";

import { CreateAccessUseCase } from "./CreateAccessUseCase";

class CreateAccessController {
  constructor(private createAccessUseCase: CreateAccessUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idCompany, idTeam, device, browser, latitude, longitude, ipDevice, } = req.body;

    this.createAccessUseCase.execute({
      id, idCompany, idTeam, device, browser, latitude, longitude, ipDevice,
    });


    return res.status(201).json();
  }
}

export { CreateAccessController };
