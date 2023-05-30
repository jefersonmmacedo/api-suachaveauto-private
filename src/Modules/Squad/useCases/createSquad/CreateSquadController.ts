import { Request, Response } from "express";
import { CreateSquadUseCase } from "./CreateSquadUseCase";

class CreateSquadController {
  constructor(private createSquadUseCase: CreateSquadUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id, avatar, name, fantasyName, rg, cpf, profession, birthday, register, email, phone, whatsapp, cep, road, number,
      district, city, uf, instagram, facebook, linkedin, bank, agency, typeAccount, account, typeKeyPix, keypix, password, } = req.body;

    this.createSquadUseCase.execute({
      id,  avatar, name, fantasyName, rg, cpf, profession, birthday, register, email, phone, whatsapp, cep, road, number,
      district, city, uf, instagram, facebook, linkedin, bank, agency, typeAccount, account, typeKeyPix, keypix, password,
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateSquadController };






