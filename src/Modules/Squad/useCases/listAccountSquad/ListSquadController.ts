import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListSquadUseCase } from "./ListSquadUseCase";

class ListSquadController {
  constructor(private listSquadUseCase: ListSquadUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const status = "active";
    const verified = true;
   await collections.squad.find({status: status, verified: verified}).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
     // console.log(result)
      return result;
     })

  }
}

export { ListSquadController };
