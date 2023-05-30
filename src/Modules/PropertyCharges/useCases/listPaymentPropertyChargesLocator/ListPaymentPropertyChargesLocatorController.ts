import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPaymentPropertyChargesLocatorUseCase } from "./ListPaymentPropertyChargesLocatorUseCase";

class ListPaymentPropertyChargesLocatorController {
  constructor(private ListPaymentPropertyChargesLocatorUseCase: ListPaymentPropertyChargesLocatorUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idLocator = req.params;
   await collections.paymentCharges.find(idLocator).toArray(function(err, result){
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

export { ListPaymentPropertyChargesLocatorController };
