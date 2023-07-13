import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAutosAvailabilityBrandUseCase } from "./ListAutosAvailabilityBrandUseCase";

class ListAutosAvailabilityBrandController {
  constructor(private listAutosAvailabilityBrandUseCase: ListAutosAvailabilityBrandUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {availability} = req.params;
    const page = req.query.page;
    const limit = req.query.limit;
    const emphasis = req.query.emphasis;
    const brand = req.query.brand;

    const boolean = emphasis === "false" ? false : true;

   await collections.autos.find({availability: availability, brand: brand, emphasis: boolean}).sort( { created_at: -1 } )
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

export { ListAutosAvailabilityBrandController };
