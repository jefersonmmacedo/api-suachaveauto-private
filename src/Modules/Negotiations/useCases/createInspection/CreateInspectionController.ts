import { Request, Response } from "express";
import { CreateInspectionUseCase } from "./CreateInspectionUseCase";

class CreateInspectionController {
  constructor(private createInspectionUseCase: CreateInspectionUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id,idCompany, idClient, idNegotiations, inspection, images} = req.body;

    this.createInspectionUseCase.execute({
      id, idCompany, idClient, idNegotiations, inspection, images
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateInspectionController };






