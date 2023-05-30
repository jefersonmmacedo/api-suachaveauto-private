import { Request, Response } from "express";
import { CreateSchedulingEvaluationUseCase } from "./CreateSchedulingEvaluationUseCase";

class CreateSchedulingEvaluationController {
  constructor(private createSchedulingEvaluationUseCase: CreateSchedulingEvaluationUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id, idClient, idEvaluation, idCompany, name, email, phone, whatsapp, status, day, month, year, shift, hour, address, dateCompleted,} = req.body;

    this.createSchedulingEvaluationUseCase.execute({
      id, idClient, idEvaluation, idCompany, name, email, phone, whatsapp, status, day, month, year, shift, hour, address, dateCompleted,
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateSchedulingEvaluationController };






