import { Request, Response } from "express";
import { CreatePaymentPropertyChargesUseCase } from "./CreatePaymentPropertyChargesUseCase";


class CreatePaymentPropertyChargesController {
  constructor(private createPaymentPropertyChargesUseCase: CreatePaymentPropertyChargesUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id, idCompany, idLocator, idProperty, paymentPropertyCharge, voucher, type, description, value, deadline, } = req.body;

    this.createPaymentPropertyChargesUseCase.execute({
      id, idCompany, idLocator, idProperty, paymentPropertyCharge, voucher, type, description, value, deadline,
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreatePaymentPropertyChargesController };






