import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAutosAvailabilityUseCase } from "./ListAutosAvailabilityUseCase";

class ListAutosAvailabilityController {
  constructor(private listAutosAvailabilityUseCase: ListAutosAvailabilityUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {availability} = req.params;
    
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

export { ListAutosAvailabilityController };
