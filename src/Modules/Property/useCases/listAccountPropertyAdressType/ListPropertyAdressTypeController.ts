import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPropertyAdressTypeUseCase } from "./ListPropertyAdressTypeUseCase";

class ListPropertyAdressTypeController {
  constructor(private listPropertyUseCase: ListPropertyAdressTypeUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {availability, status} = req.params;
    const type = req.query.type;
    const uf = req.query.uf;
    const city = req.query.city;
    const bedroom = req.query.bedroom;
    const restroom = req.query.restroom;
    const garage = req.query.garage;
    const suite = req.query.suite;
    const emphasis = req.query.emphasis;

    const page = req.query.page;
    const limit = req.query.limit;

    const boolean = emphasis === "false" ? false : true;


   await collections.property.find({
    "$and": [{ availability: availability },
      { status: { $in: [status, "Aluguel e Venda"] }},
    { type: type},
    { uf: uf},
    { city: city},
    { emphasis: boolean},
    { bedroom: { $gte: bedroom } },
    { suite: { $gte: suite } },
    { restroom: { $gte: restroom } },
    { garage: { $gte: garage } },
  ],
}).sort( { created_at: -1 } ).skip(Number(page) > 0 ? (( Number(page) - 1) * Number(limit)) : 0).limit( Number(limit) ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListPropertyAdressTypeController };




// {
//   "status": status,
//   "uf": uf,
//   "city": city,
//   "bedroom": { $gte: Number(parseInt) } ,
//   "restroom": { $gte: Number(restroom) } ,
//   "garage": { $gte: Number(garage) }
// }
