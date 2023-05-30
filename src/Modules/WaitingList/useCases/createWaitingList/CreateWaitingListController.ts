import { Request, Response } from "express";

import { CreateWaitingListUseCase } from "./CreateWaitingListUseCase";

class CreateWaitingListController {
  constructor(private createWaitingListUseCase: CreateWaitingListUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, type, nameFantasy, whatsapp, email, cep, city, uf, } = req.body;

    this.createWaitingListUseCase.execute({
      id, type, nameFantasy, whatsapp, email, cep, city, uf,
    });


    return res.status(201).json();
  }
}

export { CreateWaitingListController };
