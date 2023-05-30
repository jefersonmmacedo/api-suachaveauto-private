import { Request, Response } from "express";
import { CreateRentAdjustmentUseCase } from "./CreateRentAdjustmentUseCase";

class CreateRentAdjustmentController {
  constructor(private createRentAdjustmentUseCase: CreateRentAdjustmentUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id, idCompany, idContract, value, oldValueReadjustment, valueContract, condominium,
      iptu, otherPrices, fireInsurance, readjustmentType, readjustmentModel } = req.body;

    this.createRentAdjustmentUseCase.execute({
      id, idCompany, idContract, value, oldValueReadjustment, valueContract, condominium,
      iptu, otherPrices, fireInsurance, readjustmentType, readjustmentModel
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateRentAdjustmentController };






