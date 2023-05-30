import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateSquadUseCase } from "./UpdateSquadUseCase";

class UpdateSquadController {
  constructor(private UpdateSquadUseCase: UpdateSquadUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { avatar, name, fantasyName, rg, cpf, profession, birthday, register, email, phone, whatsapp, cep, road, number,
      district, city, uf, instagram, facebook, linkedin, bank, agency, typeAccount, account, typeKeyPix, keypix, } = req.body;
    const id = req.params; 


    await collections.squad.findOneAndUpdate(id, {$set:{ avatar, name, fantasyName, rg, cpf, profession, birthday, register, email, phone, whatsapp, cep, road, number,
      district, city, uf, instagram, facebook, linkedin, bank, agency, typeAccount, account, typeKeyPix, keypix,}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateSquadController };
