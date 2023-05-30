import { Request, Response } from "express";

import { CreateNotificationReadDataUseCase } from "./CreateNotificationReadDataUseCase";

class CreateNotificationReadDataController {
  constructor(private createNotificationReadDataUseCase: CreateNotificationReadDataUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idUser, dateReady } = req.body;

    this.createNotificationReadDataUseCase.execute({
      id, idUser, dateReady
    });


    return res.status(201).json();
  }
}

export { CreateNotificationReadDataController };
