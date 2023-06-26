import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAutosUseCase } from "./ListAutosUseCase";

class ListAutosController {
  constructor(private listAutosUseCase: ListAutosUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.autos.find({}).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListAutosController };
