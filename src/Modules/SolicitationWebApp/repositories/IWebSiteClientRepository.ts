import { WebSiteClient } from "../models/WebSiteClient";

interface ICreateWebSiteClientDTO {
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

 
interface IWebSiteClientRepository {
  create({
    idCompany, status,website,websiteAddress, hosting, domain, companyDomain, emailProfessional, title, description, color, history, mission, vision, values, logo,  
  }: ICreateWebSiteClientDTO): void;
  update({
    id, idCompany, status,website,websiteAddress, hosting, domain, companyDomain, emailProfessional, title, description, color, history, mission, vision, values, logo,  
  }: ICreateWebSiteClientDTO): void;
  list();
  delete({id});
}

export { IWebSiteClientRepository, ICreateWebSiteClientDTO };
