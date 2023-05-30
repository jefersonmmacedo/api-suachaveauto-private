import { Request, Response } from "express";
import { CreateDocumentationsUseCase } from "./CreateDocumentationsUseCase";

class CreateDocumentationsController {
  constructor(private createDocumentationsUseCase: CreateDocumentationsUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id,idCompany, idClient, idNegotiations, documentations, type} = req.body;

    this.createDocumentationsUseCase.execute({
      id, idCompany, idClient, idNegotiations, documentations, type
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateDocumentationsController };






