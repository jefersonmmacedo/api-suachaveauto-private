import { IWebSiteClientRepository } from "../../repositories/IWebSiteClientRepository";

interface IRequest {
  id: string;
  idCompany: string;
  status: string;
  website: string;
  websiteAddress: string;
  hosting: string;
  domain: string;
  companyDomain: string;
  emailProfessional: string;
  title: string;
  description: string;
  color: string;
  history: string;
  mission: string;
  vision: string;
  values: string;
  logo: string;
}

class CreateWebSiteClientUseCase {
  constructor(private WebSiteClientRepository: IWebSiteClientRepository) {
    " ";
  }

  execute({  id, idCompany, status,website,websiteAddress, hosting, domain, companyDomain, emailProfessional, title, description, color, history, mission, vision, values, logo,  }: IRequest): void {

    this.WebSiteClientRepository.create({
       id, idCompany, status,website,websiteAddress, hosting, domain, companyDomain, emailProfessional, title, description, color, history, mission, vision, values, logo, 
    });
  }
}

export { CreateWebSiteClientUseCase };
