import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPropertyAllPropertiesUseCase } from "./ListPropertyAllPropertiesUseCase";

class ListPropertyAllPropertiesController {
  constructor(private listPropertyAllPropertiesUseCase: ListPropertyAllPropertiesUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {availability} = req.params;
    const page = req.query.page;
    const limit = req.query.limit;


   await collections.property.find({availability}).sort( { created_at: -1 } )
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

export { ListPropertyAllPropertiesController };
