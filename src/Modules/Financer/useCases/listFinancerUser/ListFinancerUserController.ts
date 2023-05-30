import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListFinancerUserUseCase } from "./ListFinancerUserUseCase";

class ListFinancerUserController {
  constructor(private listFinancerUseCase: ListFinancerUserUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idCompany = req.params
   await collections.financer.find(idCompany).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListFinancerUserController };
