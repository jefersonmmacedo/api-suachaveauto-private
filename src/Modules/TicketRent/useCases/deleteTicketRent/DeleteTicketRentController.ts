import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteTicketRentUseCase } from "./DeleteTicketRentUseCase";

class DeleteTicketRentController {
  constructor(private DeleteTicketRentUseCase: DeleteTicketRentUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.ticketRent.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteTicketRentController };
