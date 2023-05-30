import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateSchedulingStatusUseCase } from "./UpdateSchedulingStatusUseCase";

class UpdateSchedulingStatusController {
  constructor(private UpdateSchedulingStatusUseCase: UpdateSchedulingStatusUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {status} = req.body;
    const id = req.params; 
    console.log(status)
    console.log(id)


    await collections.scheduling.findOneAndUpdate(id, {$set:{ status }}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateSchedulingStatusController };
