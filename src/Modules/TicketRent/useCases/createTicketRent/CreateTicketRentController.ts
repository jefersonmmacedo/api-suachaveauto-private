import { Request, Response } from "express";

import { CreateTicketRentUseCase } from "./CreateTicketRentUseCase";

class CreateTicketRentController {
  constructor(private createTicketRentUseCase: CreateTicketRentUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
      id, IdClient, idCompany, idProperty, status, priority, type, message, imagesProperty,
     } =
      req.body;
    this.createTicketRentUseCase.execute({
      id, IdClient, idCompany, idProperty, status, priority, type, message, imagesProperty,
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreateTicketRentController };
