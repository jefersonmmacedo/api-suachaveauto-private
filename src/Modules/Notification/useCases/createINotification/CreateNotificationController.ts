import { Request, Response } from "express";
import { CreateNotificationUseCase } from "./CreateNotificationUseCase";

class CreateNotificationController {
  constructor(private createNotificationUseCase: CreateNotificationUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id, idAccount, text, type, link, view, } = req.body;

    this.createNotificationUseCase.execute({
      id, idAccount, text, type, link, view,
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })
    
  }
}

export { CreateNotificationController };
