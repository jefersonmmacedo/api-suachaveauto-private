import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAutosTypeUseCase } from "./ListAutosTypeUseCase";

class ListAutosTypeController {
  constructor(private listAutosTypeUseCase: ListAutosTypeUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {type} = req.params;
    const availability = "Disponível"
    const page = 0;
    const limit = 12

   await collections.autos.find({availability, type}).sort( { created_at: -1 } ).limit( Number(limit) ).toArray(function(err, result){
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

export { ListAutosTypeController };
