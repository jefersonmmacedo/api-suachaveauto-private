import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateCompanyUseCase } from "./UpdateCompanyUseCase";

class UpdateCompanyController {
  constructor(private UpdateCompanyUseCase: UpdateCompanyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {type, status, nameSlug, socialReason, fantasyName, creci, email, phone, whatsapp, responsibleName,
      emailResponsible, whatsappResponsible, logo, cep, road, number, district, city, uf,complement, reference, viewAddress, website, facebook, instagram, linkedin, youtube,} = req.body;
    const id = req.params; 


    await collections.company.findOneAndUpdate(id, {$set:{type, status, nameSlug, socialReason, fantasyName, creci, email, phone, whatsapp, responsibleName,
      emailResponsible, whatsappResponsible, logo, cep, road, number, district, city, uf,complement, reference, viewAddress, website, facebook, instagram, linkedin, youtube,}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateCompanyController };
