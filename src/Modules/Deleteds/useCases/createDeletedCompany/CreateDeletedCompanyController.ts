import { Request, Response } from "express";

import { CreateDeletedCompanyUseCase } from "./CreateDeletedCompanyUseCase";

class CreateDeletedCompanyController {
  constructor(private createDeletedCompanyUseCase: CreateDeletedCompanyUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const {
      id, idCompany, reason, description, properties, messages, leads, contracts, financers, charges, schedules,
      clients, locators, guarantors, initialDate, lastPlan, lastPayment, reconciliation, resultReconciliation, 
    } = req.body;

    this.createDeletedCompanyUseCase.execute({
      id, idCompany, reason, description, properties, messages, leads, contracts, financers, charges, schedules,
      clients, locators, guarantors, initialDate, lastPlan, lastPayment, reconciliation, resultReconciliation, 
    });


    return res.status(201).json();
  }
}

export { CreateDeletedCompanyController };
