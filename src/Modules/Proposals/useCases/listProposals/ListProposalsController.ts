import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListProposalsUseCase } from "./ListProposalsUseCase";

class ListProposalsController {
  constructor(private listProposalsUseCase: ListProposalsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.proposals.find().sort( { created_at: -1 } ).limit(20).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListProposalsController };
