import { Request, Response } from "express";

import { CreateContactUseCase } from "./CreateContactUseCase";

class CreateContactController {
  constructor(private createContactUseCase: CreateContactUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idAuto, idCompany, idClient, name, email, phone, whatsapp, type, origin, latitude, longitude, } = req.body;

    this.createContactUseCase.execute({
      id, idAuto, idCompany, idClient, name, email, phone, whatsapp, type, origin, latitude, longitude,
    });


    return res.status(201).json();
  }
}

export { CreateContactController };
