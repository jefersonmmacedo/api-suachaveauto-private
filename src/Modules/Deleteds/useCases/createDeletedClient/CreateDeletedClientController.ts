import { Request, Response } from "express";

import { CreateDeletedClientUseCase } from "./CreateDeletedClientUseCase";

class CreateDeletedClientController {
  constructor(private createDeletedClientUseCase: CreateDeletedClientUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idClient, Reason, description, favorites, messages, schedule, } = req.body;

    this.createDeletedClientUseCase.execute({
      id, idClient, Reason, description, favorites, messages, schedule,
    });

    return res.status(201).json();
  }
}

export { CreateDeletedClientController };
