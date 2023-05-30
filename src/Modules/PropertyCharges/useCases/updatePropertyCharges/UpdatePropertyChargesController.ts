import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdatePropertyChargesUseCase } from "./UpdatePropertyChargesUseCase";

class UpdatePropertyChargesController {
  constructor(private UpdatePropertyChargesUseCase: UpdatePropertyChargesUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {
      idCompany, idLocator, idProperty, type, description, value, deadline, period, alert, status,
     } = req.body;
    const id = req.params; 


    await collections.propertyCharges.findOneAndUpdate(id, {$set:{
      idCompany, idLocator, idProperty, type, description, value, deadline, period, alert, status,
    }}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdatePropertyChargesController };
