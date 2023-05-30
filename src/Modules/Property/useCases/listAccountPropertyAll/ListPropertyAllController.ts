import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPropertyAllUseCase } from "./ListPropertyAllUseCase";

class ListPropertyAllController {
  constructor(private listPropertyAllUseCase: ListPropertyAllUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {availability} = req.params;
    const emphasis = req.query.emphasis;
    const page = req.query.page;
    const limit = req.query.limit;


    const boolean = emphasis === "false" ? false : true;

    console.log("emphasis")
    console.log(emphasis)
    console.log("boolean")
    console.log(boolean)
    console.log("limit")
    console.log(limit)

   await collections.property.find({availability, emphasis: boolean}).sort( { created_at: -1 } )
   .skip(Number(page) > 0 ? (( Number(page) - 1) * Number(limit)) : 0).limit( Number(limit) ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        //console.log(result.length)
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListPropertyAllController };
