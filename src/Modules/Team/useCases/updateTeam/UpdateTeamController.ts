import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateTeamUseCase } from "./UpdateTeamUseCase";

class UpdateTeamController {
  constructor(private UpdateTeamUseCase: UpdateTeamUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idCompany, avatar, type, name, fantasyName, rg, cpf, birthday, creci,
      email, phone, whatsapp, cep, road, number, district, city, uf,
      instagram, facebook, linkedin, twitter,
      bank, agency, typeAccount, account, typeKeyPix, keypix, password } = req.body;
    const id = req.params; 


    await collections.team.findOneAndUpdate(id, {$set:{idCompany, avatar, type, name, fantasyName, rg, cpf, birthday, creci,
      email, phone, whatsapp, cep, road, number, district, city, uf,
      instagram, facebook, linkedin, twitter,
      bank, agency, typeAccount, account, typeKeyPix, keypix, password}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateTeamController };
