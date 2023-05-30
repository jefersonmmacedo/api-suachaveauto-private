import { Request, Response } from "express";
import { CreateTeamUseCase } from "./CreateTeamUseCase";

class CreateTeamController {
  constructor(private createTeamUseCase: CreateTeamUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id, idCompany, avatar, type, name, fantasyName, rg, cpf, birthday, creci,
      email, phone, whatsapp, cep, road, number, district, city, uf,
      instagram, facebook, linkedin, twitter,
      bank, agency, typeAccount, account, typeKeyPix, keypix, password  } = req.body;

    this.createTeamUseCase.execute({
      id, idCompany, avatar, type, name, fantasyName, rg, cpf, birthday, creci,
      email, phone, whatsapp, cep, road, number, district, city, uf,
      instagram, facebook, linkedin, twitter,
      bank, agency, typeAccount, account, typeKeyPix, keypix, password
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateTeamController };






