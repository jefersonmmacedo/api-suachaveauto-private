import { Request, Response } from "express";
import { CreateProcessNotesUseCase } from "./CreateProcessNotesUseCase";

class CreateProcessNotesController {
  constructor(private createProcessNotesUseCase: CreateProcessNotesUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id,idCompany, idClient, idNegotiations, noteProcess, status,} = req.body;

    this.createProcessNotesUseCase.execute({
      id, idCompany, idClient, idNegotiations, noteProcess, status,
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateProcessNotesController };






