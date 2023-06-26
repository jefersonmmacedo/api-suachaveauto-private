import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAutosAutoUseCase } from "./ListAutosAutoUseCase";

class ListAutosAutoController {
  constructor(private listAutosAutoUseCase: ListAutosAutoUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {id} = req.params;
    const availability = "Disponível"

    console.log(id)
    
   await collections.autos.find({availability, id}).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListAutosAutoController };
