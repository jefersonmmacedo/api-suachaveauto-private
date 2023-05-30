import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPropertyAllTypeUseCase } from "./ListPropertyAllTypeUseCase";

class ListPropertyAllTypeController {
  constructor(private listPropertyAllUseCase: ListPropertyAllTypeUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {availability} = req.params;
    const type = req.query.type;
    const emphasis = req.query.emphasis;

    const page = req.query.page;
    const limit = req.query.limit;

    console.log(emphasis)

    const boolean = emphasis === "false" ? false : true;

   await collections.property.find({availability, type, emphasis: boolean}).sort( { created_at: -1 } )
   .skip(Number(page) > 0 ? (( Number(page) - 1) * Number(limit)) : 0).limit( Number(limit) ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListPropertyAllTypeController };
