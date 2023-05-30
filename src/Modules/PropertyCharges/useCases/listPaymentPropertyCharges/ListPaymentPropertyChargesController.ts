import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPaymentPropertyChargesUseCase } from "./ListPaymentPropertyChargesUseCase";

class ListPaymentPropertyChargesController {
  constructor(private listPaymentPropertyChargesUseCase: ListPaymentPropertyChargesUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const status = "active";
    const verified = true;
   await collections.paymentCharges.find({status: status, verified: verified}).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
     // console.log(result)
      return result;
     })

  }
}

export { ListPaymentPropertyChargesController };
