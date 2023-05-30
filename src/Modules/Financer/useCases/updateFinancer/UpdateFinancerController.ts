import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateFinancerUseCase } from "./UpdateFinancerUseCase";
import { hash } from "bcrypt";

class UpdateFinancerController {
  constructor(private UpdatStatusUseCase: UpdateFinancerUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { idCompany, idLocator, nameLocator, idProperty, titleProperty, idTransaction, title, description, type, value, document,} = req.body;
    const id = req.params; 

    await collections.account.findOneAndUpdate(id, {$set:{idCompany, idLocator, nameLocator, idProperty, titleProperty, idTransaction, title, description, type, value, document,}}, {upsert: true}).then((result) => {
      console.log("Status atualizada com sucesso")
      return res.status(201).json(result);

    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateFinancerController };
