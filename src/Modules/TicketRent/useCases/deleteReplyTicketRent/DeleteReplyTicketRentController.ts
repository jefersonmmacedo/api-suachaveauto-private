import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteReplyTicketRentUseCase } from "./DeleteReplyTicketRentUseCase";

class DeleteReplyTicketRentController {
  constructor(private DeleteReplyTicketRentUseCase: DeleteReplyTicketRentUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.replyTicketRent.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteReplyTicketRentController };
