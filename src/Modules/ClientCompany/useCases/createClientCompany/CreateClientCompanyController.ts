import { Request, Response } from "express";
import { CreateClientCompanyUseCase } from "./CreateClientCompanyUseCase";

class CreateClientCompanyController {
  constructor(private createClientCompanyUseCase: CreateClientCompanyUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id, idProcess, idCompany, typeClient, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
      number, district, city, uf, interest, type, subtype, cityPreference, ufPreference,  attendance, } = req.body;

    this.createClientCompanyUseCase.execute({
      id, idProcess, idCompany, typeClient, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
      number, district, city, uf, interest, type, subtype, cityPreference, ufPreference,  attendance,
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateClientCompanyController };






