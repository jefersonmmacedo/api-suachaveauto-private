import { Request, Response } from "express";

import { CreateProposalsUseCase } from "./CreateProposalsUseCase";

class CreateProposalsController {
  constructor(private createProposalsUseCase: CreateProposalsUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, typeProposal, idCompany, idProperty, title, type, subType, condominium, iptu, otherPrices, 
      idClient, nameClient, cpfCnpjClient, email, phone, whatsapp,
      status, valueProperty, formOfpayment, expirationDate, contactReminder,  } = req.body;

    this.createProposalsUseCase.execute({
      id, typeProposal, idCompany, idProperty, title, type, subType, condominium, iptu, otherPrices, 
      idClient, nameClient, cpfCnpjClient, email, phone, whatsapp,
status, valueProperty, formOfpayment, expirationDate, contactReminder, 
    });


    return res.status(201).json();
  }
}

export { CreateProposalsController };
