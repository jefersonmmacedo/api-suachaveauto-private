import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListSchedulingConfigUseCase } from "./ListSchedulingConfigUseCase";

class ListSchedulingConfigController {
  constructor(private listSchedulingConfigUseCase: ListSchedulingConfigUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.schedulingConfig.find().sort( { created_at: -1 } ).limit(20).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListSchedulingConfigController };
