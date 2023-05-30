import { Request, Response } from "express";

import { CreateMessageReadDataUseCase } from "./CreateMessageReadDataUseCase";

class CreateMessageReadDataController {
  constructor(private createMessageReadDataUseCase: CreateMessageReadDataUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idUser, dateReady } = req.body;

    this.createMessageReadDataUseCase.execute({
      id, idUser, dateReady
    });


    return res.status(201).json();
  }
}

export { CreateMessageReadDataController };
