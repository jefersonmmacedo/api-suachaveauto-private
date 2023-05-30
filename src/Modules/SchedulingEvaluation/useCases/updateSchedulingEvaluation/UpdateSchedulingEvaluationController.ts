import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateSchedulingEvaluationUseCase } from "./UpdateSchedulingEvaluationUseCase";

class UpdateSchedulingEvaluationController {
  constructor(private UpdateSchedulingEvaluationUseCase: UpdateSchedulingEvaluationUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idClient, idEvaluation, idCompany, name, email, phone, whatsapp, status, day, month, year, shift, hour, address, dateCompleted, } = req.body;
    const id = req.params; 


    await collections.schedulingEvaluation.findOneAndUpdate(id, {$set:{idClient, idEvaluation, idCompany, name, email, phone, whatsapp, status, day, month, year, shift, hour, address, dateCompleted,}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateSchedulingEvaluationController };
