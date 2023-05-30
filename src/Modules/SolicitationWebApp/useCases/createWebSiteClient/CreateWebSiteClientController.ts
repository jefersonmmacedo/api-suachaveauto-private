import { Request, Response } from "express";

import { CreateWebSiteClientUseCase } from "./CreateWebSiteClientUseCase";

class CreateWebSiteClientController {
  constructor(private createWebSiteClientUseCase: CreateWebSiteClientUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idCompany, status,website,websiteAddress, hosting, domain, companyDomain, emailProfessional, title, description, color, history, mission, vision, values, logo,   } = req.body;

    this.createWebSiteClientUseCase.execute({
      id, idCompany, status,website,websiteAddress, hosting, domain, companyDomain, emailProfessional, title, description, color, history, mission, vision, values, logo,  
    });


    return res.status(201).json();
  }
}

export { CreateWebSiteClientController };