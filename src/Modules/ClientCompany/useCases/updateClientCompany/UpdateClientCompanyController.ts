import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateClientCompanyUseCase } from "./UpdateClientCompanyUseCase";

class UpdateClientCompanyController {
  constructor(private UpdateClientCompanyUseCase: UpdateClientCompanyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idProcess, typeClient, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
      number, district, city, uf, interest, type, subtype, cityPreference, ufPreference,  attendance, } = req.body;
    const id = req.params; 


    await collections.clientCompany.findOneAndUpdate(id, {$set:{
      idProcess, typeClient, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
number, district, city, uf, interest, type, subtype, cityPreference, ufPreference,  attendance, 
    }}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateClientCompanyController };
