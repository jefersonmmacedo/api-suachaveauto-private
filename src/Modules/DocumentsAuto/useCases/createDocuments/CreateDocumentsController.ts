import { Request, Response } from "express";

import { CreateDocumentsUseCase } from "./CreateDocumentsUseCase";

class CreateDocumentsController {
  constructor(private createDocumentsUseCase: CreateDocumentsUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, document } = req.body;

    this.createDocumentsUseCase.execute({
      id, document
    });


    return res.status(201).json();
  }
}

export { CreateDocumentsController };
