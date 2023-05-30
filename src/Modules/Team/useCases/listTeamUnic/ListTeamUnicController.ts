import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListTeamUnicUseCase } from "./ListTeamUnicUseCase";

class ListTeamUnicController {
  constructor(private ListTeamUnicUseCase: ListTeamUnicUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const id = req.params;
   await collections.team.find(id).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
    //  console.log(result)
      return result;
     })
  }
}

export { ListTeamUnicController };
