import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListSchedulingConfigUserUseCase } from "./ListSchedulingConfigUserUseCase";

class ListSchedulingConfigUserController {
  constructor(private listSchedulingConfigUseCase: ListSchedulingConfigUserUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idCompany = req.params
   await collections.schedulingConfig.find(idCompany).sort( { created_at: -1 } ).limit(20).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListSchedulingConfigUserController };
