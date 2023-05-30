import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPropertyUseCase } from "./ListPropertyUseCase";

class ListPropertyController {
  constructor(private listPropertyUseCase: ListPropertyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {availability, status} = req.params;
    const emphasis = req.query.emphasis;
    const page = req.query.page;
    const limit = req.query.limit;

    const boolean = emphasis === "false" ? false : true;

   await collections.property.find({
    "$and": [{ availability: availability, emphasis: boolean },
    { status: { $in: [status, "Aluguel e Venda"] }}
  ],
}).sort( { created_at: -1 } )
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

export { ListPropertyController };




// {
//   "status": status,
//   "uf": uf,
//   "city": city,
//   "bedroom": { $gte: Number(parseInt) } ,
//   "restroom": { $gte: Number(restroom) } ,
//   "garage": { $gte: Number(garage) }
// }
