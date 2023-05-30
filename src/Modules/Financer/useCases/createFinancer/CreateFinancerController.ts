import { Request, Response } from "express";

import { CreateFinancerUseCase } from "./CreateFinancerUseCase";

class CreateFinancerController {
  constructor(private createFinancerUseCase: CreateFinancerUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idCompany, idLocator, nameLocator, idProperty, titleProperty,idTransaction, title, description, type, value, document } = req.body;

    this.createFinancerUseCase.execute({
      id, idCompany, idLocator, nameLocator, idProperty, titleProperty,idTransaction, title, description, type, value, document
    });


    return res.status(201).json();
  }
}

export { CreateFinancerController };
