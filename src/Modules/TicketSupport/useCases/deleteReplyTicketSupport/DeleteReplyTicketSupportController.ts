import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteReplyTicketSupportUseCase } from "./DeleteReplyTicketSupportUseCase";

class DeleteReplyTicketSupportController {
  constructor(private DeleteReplyTicketSupportUseCase: DeleteReplyTicketSupportUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.replyTicketSupport.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteReplyTicketSupportController };
