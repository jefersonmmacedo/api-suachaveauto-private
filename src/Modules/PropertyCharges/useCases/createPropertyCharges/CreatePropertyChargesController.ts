import { Request, Response } from "express";
import { CreatePropertyChargesUseCase } from "./CreatePropertyChargesUseCase";

class CreatePropertyChargesController {
  constructor(private createPropertyChargesUseCase: CreatePropertyChargesUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id, idCompany, idLocator, idProperty, type, description, value, deadline, period, alert, status, } = req.body;

    this.createPropertyChargesUseCase.execute({
      id, idCompany, idLocator, idProperty, type, description, value, deadline, period, alert, status,
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreatePropertyChargesController };






