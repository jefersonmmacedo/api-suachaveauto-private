import { Request, Response } from "express";

import { CreateTicketSupportUseCase } from "./CreateTicketSupportUseCase";

class CreateTicketSupportController {
  constructor(private createTicketSupportUseCase: CreateTicketSupportUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
      id, IdClient, idCompany, idProperty, status, priority, type, message, imagesProperty,
     } =
      req.body;
    this.createTicketSupportUseCase.execute({
      id, IdClient, idCompany, idProperty, status, priority, type, message, imagesProperty,
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreateTicketSupportController };
