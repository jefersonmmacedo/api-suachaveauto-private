import { Request, Response } from "express";

import { CreateSchedulingConfigUseCase } from "./CreateSchedulingConfigUseCase";

class CreateSchedulingConfigController {
  constructor(private createSchedulingConfigUseCase: CreateSchedulingConfigUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idCompany, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, } = req.body;

    this.createSchedulingConfigUseCase.execute({
      id, idCompany, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday,
    });


    return res.status(201).json();
  }
}

export { CreateSchedulingConfigController };
