import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPropertyEmphasisUseCase } from "./ListPropertyEmphasisUseCase";

class ListPropertyEmphasisController {
  constructor(private listPropertyEmphasisUseCase: ListPropertyEmphasisUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const emphasis = true;

   await collections.property.find({emphasis: emphasis}).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListPropertyEmphasisController };




// {
//   "status": status,
//   "uf": uf,
//   "city": city,
//   "bedroom": { $gte: Number(parseInt) } ,
//   "restroom": { $gte: Number(restroom) } ,
//   "garage": { $gte: Number(garage) }
// }
