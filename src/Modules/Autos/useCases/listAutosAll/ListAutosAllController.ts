import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAutosAllUseCase } from "./ListAutosAllUseCase";

class ListAutosAllController {
  constructor(private listAutosUseCase: ListAutosAllUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const availability = "Disponível"
   await collections.autos.find({availability}).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListAutosAllController };
