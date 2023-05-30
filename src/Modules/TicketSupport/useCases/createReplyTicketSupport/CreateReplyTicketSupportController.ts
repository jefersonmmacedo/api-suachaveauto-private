import { Request, Response } from "express";

import { CreateReplyTicketSupportUseCase } from "./CreateReplyTicketSupportUseCase";

class CreateReplyTicketSupportController {
  constructor(private createReplyTicketSupportUseCase: CreateReplyTicketSupportUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
      id, idTicket, IdClient, idCompany, idProperty,message, imagesProperty
     } =
      req.body;
    this.createReplyTicketSupportUseCase.execute({
      id, idTicket, IdClient, idCompany, idProperty,message, imagesProperty
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreateReplyTicketSupportController };
