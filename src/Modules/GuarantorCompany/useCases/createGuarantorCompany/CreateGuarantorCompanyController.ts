import { Request, Response } from "express";
import { CreateGuarantorCompanyUseCase } from "./CreateGuarantorCompanyUseCase";

class CreateGuarantorCompanyController {
  constructor(private createGuarantorCompanyUseCase: CreateGuarantorCompanyUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id, idProcess, idCompany, typeGuarantor, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
      number, district, city, uf, interest, type, subtype, cityPreference, ufPreference,  attendance, } = req.body;

    this.createGuarantorCompanyUseCase.execute({
      id, idProcess, idCompany, typeGuarantor, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
      number, district, city, uf, interest, type, subtype, cityPreference, ufPreference,  attendance,
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateGuarantorCompanyController };






