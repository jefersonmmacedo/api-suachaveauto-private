import { Request, Response } from "express";

import { CreateRoomReadDataUseCase } from "./CreateRoomReadDataUseCase";

class CreateRoomReadDataController {
  constructor(private createRoomReadDataUseCase: CreateRoomReadDataUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idUser, idRoom, dateReady } = req.body;

    this.createRoomReadDataUseCase.execute({
      id, idUser, idRoom, dateReady
    });


    return res.status(201).json();
  }
}

export { CreateRoomReadDataController };
