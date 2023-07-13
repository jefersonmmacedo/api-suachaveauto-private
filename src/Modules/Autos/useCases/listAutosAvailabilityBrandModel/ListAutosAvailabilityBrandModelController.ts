import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAutosAvailabilityBrandModelUseCase } from "./ListAutosAvailabilityBrandModelUseCase";

class ListAutosAvailabilityBrandModelController {
  constructor(private listAutosAvailabilityBrandModelUseCase: ListAutosAvailabilityBrandModelUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {availability} = req.params;
    const page = req.query.page;
    const limit = req.query.limit;
    const emphasis = req.query.emphasis;
    const model = req.query.model as string;
    const brand = req.query.brand;
    const Music = "Musica"
    const boolean = emphasis === "false" ? false : true;

   await collections.autos.find({  
    $text: { $search: "sandero" } 
  }).sort( { created_at: -1 } )
   .skip(Number(page) > 0 ? (( Number(page) - 1) * Number(limit)) : 0).limit( Number(limit) ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        console.log(result)
        res.status(200).json(result)
      }

      console.log(result)
      return result;
     })

  }
}

export { ListAutosAvailabilityBrandModelController };
