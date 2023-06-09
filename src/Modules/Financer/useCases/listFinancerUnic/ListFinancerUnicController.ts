import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListFinancerUnicUseCase } from "./ListFinancerUnicUseCase";

class ListFinancerUnicController {
  constructor(private listFinancerUseCase: ListFinancerUnicUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const id = req.params
   await collections.financer.find(id).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListFinancerUnicController };
