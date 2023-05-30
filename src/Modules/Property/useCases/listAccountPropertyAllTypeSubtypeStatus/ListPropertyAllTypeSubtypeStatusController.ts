import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPropertyAllTypeSubtypeStatusUseCase } from "./ListPropertyAllTypeSubtypeStatusUseCase";

class ListPropertyAllTypeSubtypeStatusController {
  constructor(private listPropertyAllUseCase: ListPropertyAllTypeSubtypeStatusUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {availability, status} = req.params;
    const type = req.query.type;
    const subType = req.query.subType;
    const bedroom = req.query.bedroom;
    const restroom = req.query.restroom;
    const garage = req.query.garage;
    const suite = req.query.suite;
    const emphasis = req.query.emphasis;

    const page = req.query.page;
    const limit = req.query.limit;

    const boolean = emphasis === "false" ? false : true;

    console.log(type)

   await collections.property.find({
    "$and": [{ availability: availability },
      { status: { $in: [status, "Aluguel e Venda"] }},
    { type: type},
    { subType: subType},
    { emphasis: boolean},
    { bedroom: { $gte: bedroom } },
    { suite: { $gte: suite } },
    { restroom: { $gte: restroom } },
    { garage: { $gte: garage } },
  ],
}).sort( { created_at: -1 } )
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

export { ListPropertyAllTypeSubtypeStatusController };
