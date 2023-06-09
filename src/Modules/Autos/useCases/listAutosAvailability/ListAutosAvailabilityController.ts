import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAutosAvailabilityUseCase } from "./ListAutosAvailabilityUseCase";

class ListAutosAvailabilityController {
  constructor(private listAutosAvailabilityUseCase: ListAutosAvailabilityUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {availability} = req.params;
    const limit = req.query.limit;
    const page = req.query.page;
    const emphasis = req.query.emphasis;

    const boolean = emphasis === "false" ? false : true;



   await collections.autos.find({availability, emphasis: boolean}).sort( { created_at: -1 } )
   .skip(Number(page) > 0 ? (( Number(page) - 1) * Number(limit)) : 0).limit( Number(limit) ).toArray(function(err, result){
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
