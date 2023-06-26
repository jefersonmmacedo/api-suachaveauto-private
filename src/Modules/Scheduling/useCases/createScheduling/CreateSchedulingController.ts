import { Request, Response } from "express";
import { CreateSchedulingUseCase } from "./CreateSchedulingUseCase";

class CreateSchedulingController {
  constructor(private createSchedulingUseCase: CreateSchedulingUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id, idClient, idAuto, idCompany, idEvaluation, titleProperty, imageProperty, nameClient, avatarClient, email, phone, whatsapp, type, status, meet,
      day, month, year, shift, hour, ownACar, location, address, similarProperties, amountOfPeople, dateCompleted} = req.body;

    this.createSchedulingUseCase.execute({
      id, idClient, idAuto, idCompany, idEvaluation, titleProperty, imageProperty, nameClient, avatarClient, email, phone, whatsapp, type, status, meet,
      day, month, year, shift, hour, ownACar, location, address, similarProperties, amountOfPeople, dateCompleted
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateSchedulingController };






