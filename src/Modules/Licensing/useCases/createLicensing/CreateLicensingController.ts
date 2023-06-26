import { Request, Response } from "express";

import { CreateLicensingUseCase } from "./CreateLicensingUseCase";

class CreateLicensingController {
  constructor(private createLicensingUseCase: CreateLicensingUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, licensing } = req.body;

    this.createLicensingUseCase.execute({
      id, licensing
    });


    return res.status(201).json();
  }
}

export { CreateLicensingController };
