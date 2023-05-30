import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateGuarantorCompanyUseCase } from "./UpdateGuarantorCompanyUseCase";

class UpdateGuarantorCompanyController {
  constructor(private UpdateGuarantorCompanyUseCase: UpdateGuarantorCompanyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idProcess, typeGuarantor, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
      number, district, city, uf, interest, type, subtype, cityPreference, ufPreference,  attendance, } = req.body;
    const id = req.params; 


    await collections.guarantorCompany.findOneAndUpdate(id, {$set:{
      idProcess, typeGuarantor, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
number, district, city, uf, interest, type, subtype, cityPreference, ufPreference,  attendance, 
    }}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateGuarantorCompanyController };
