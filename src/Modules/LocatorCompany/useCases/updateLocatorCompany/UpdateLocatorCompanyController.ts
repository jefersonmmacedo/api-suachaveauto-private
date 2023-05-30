import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateLocatorCompanyUseCase } from "./UpdateLocatorCompanyUseCase";

class UpdateLocatorCompanyController {
  constructor(private UpdateLocatorCompanyUseCase: UpdateLocatorCompanyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {
      name, fantasyName, rg, cpf_Cnpj, birthday, email, phone, whatsapp, cep, road, number, district, city, uf,
     } = req.body;
    const id = req.params; 


    await collections.locatorCompany.findOneAndUpdate(id, {$set:{
      name, fantasyName, rg, cpf_Cnpj, birthday, email, phone, whatsapp, cep, road, number, district, city, uf,
    }}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateLocatorCompanyController };
