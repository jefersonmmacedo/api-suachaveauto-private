import { Request, Response } from "express";

import { CreateMessageUseCase } from "./CreateMessageUseCase";

class CreateMessageController {
  constructor(private createMessageUseCase: CreateMessageUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idRoom, idAccount, idFriend, name, avatar, text, link, type, } = req.body;

    this.createMessageUseCase.execute({
      id, idRoom, idAccount, idFriend, name, avatar, text, link, type,
    });


    return res.status(201).json();
  }
}

export { CreateMessageController };
