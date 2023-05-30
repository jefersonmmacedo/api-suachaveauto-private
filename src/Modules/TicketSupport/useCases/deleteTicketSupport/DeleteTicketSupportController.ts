import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteTicketSupportUseCase } from "./DeleteTicketSupportUseCase";

class DeleteTicketSupportController {
  constructor(private DeleteTicketSupportUseCase: DeleteTicketSupportUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.ticketSupport.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteTicketSupportController };
