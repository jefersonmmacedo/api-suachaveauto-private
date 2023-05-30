import { WebSiteClient } from "../../models/WebSiteClient";
import { ICreateWebSiteClientDTO, IWebSiteClientRepository } from "../IWebSiteClientRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class WebSiteClientRepository implements IWebSiteClientRepository {
  private webSiteClient: WebSiteClient[];

  private static INSTANCE: WebSiteClientRepository;

  private constructor() {
    this.webSiteClient = [];
  }

  public static getInstance(): WebSiteClientRepository {
    if (!WebSiteClientRepository.INSTANCE) {
      WebSiteClientRepository.INSTANCE = new WebSiteClientRepository();
    }

    return WebSiteClientRepository.INSTANCE;
  }

  async create({
    idCompany, status,website, websiteAddress, hosting, domain, companyDomain, emailProfessional, title, description, color, history, mission, vision, values, logo,   
  }: ICreateWebSiteClientDTO) {
    const SiteClient: WebSiteClient = new WebSiteClient();
    const _id = uuidv4()
    Object.assign(SiteClient, {
      _id, id: _id,
      idCompany, status,website, websiteAddress, hosting, domain, companyDomain, emailProfessional, title, description, color, history, mission, vision, values, logo,   
      created_at: new Date()
    });

    this.webSiteClient.push(SiteClient);
    console.log(WebSiteClient)
    await collections.webSiteClient.insertOne(SiteClient).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ idCompany, status,website, websiteAddress, hosting, domain, companyDomain, emailProfessional, title, description, color, history, mission, vision, values, logo,   }){}

  async delete({id}) {
    await collections.webSiteClient.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { WebSiteClientRepository };
