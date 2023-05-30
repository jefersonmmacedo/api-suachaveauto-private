import { Request, Response } from "express";
import { CreateLocatorCompanyUseCase } from "./CreateLocatorCompanyUseCase";

class CreateLocatorCompanyController {
  constructor(private createLocatorCompanyUseCase: CreateLocatorCompanyUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id, idCompany, name, fantasyName, rg, cpf_Cnpj, birthday, email, phone, whatsapp, cep, road, number, district, city, uf, } = req.body;

    this.createLocatorCompanyUseCase.execute({
      id, idCompany, name, fantasyName, rg, cpf_Cnpj, birthday, email, phone, whatsapp, cep, road, number, district, city, uf,
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateLocatorCompanyController };






