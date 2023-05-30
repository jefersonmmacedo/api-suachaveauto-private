import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdatePaymentPropertyChargesUseCase } from "./UpdatePaymentPropertyChargesUseCase";

class UpdatePaymentPropertyChargesController {
  constructor(private UpdatePaymentPropertyChargesUseCase: UpdatePaymentPropertyChargesUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {
      idCompany, idLocator, idProperty, paymentPropertyCharge, voucher, type, description, value, deadline, 
     } = req.body;
    const id = req.params; 


    await collections.paymentCharges.findOneAndUpdate(id, {$set:{
      id, idCompany, idLocator, idProperty, paymentPropertyCharge, voucher, type, description, value, deadline, 
    }}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdatePaymentPropertyChargesController };
