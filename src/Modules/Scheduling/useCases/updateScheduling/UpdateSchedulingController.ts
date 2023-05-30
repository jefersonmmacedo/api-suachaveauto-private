import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateSchedulingUseCase } from "./UpdateSchedulingUseCase";

class UpdateSchedulingController {
  constructor(private UpdateSchedulingUseCase: UpdateSchedulingUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { day, month, year, shift, hour, dateCompleted } = req.body;
    const id = req.params; 


    await collections.scheduling.findOneAndUpdate(id, {$set:{
           day, month, year, shift, hour, dateCompleted
        }}, {upsert: true}).then((result) => {
          return res.status(201).json(result);
        }).catch(error => {
          return res.status(500);
        })

      }
    }

export { UpdateSchedulingController };
