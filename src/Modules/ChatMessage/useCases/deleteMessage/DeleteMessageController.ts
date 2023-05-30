import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteMessageUseCase } from "./DeleteMessageUseCase";

class DeleteMessageController {
  constructor(private DeleteMessageUseCase: DeleteMessageUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.messagesRooms.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteMessageController };
