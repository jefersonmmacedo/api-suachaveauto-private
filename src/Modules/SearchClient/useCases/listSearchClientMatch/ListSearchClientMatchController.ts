import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListSearchClientMatchUseCase } from "./ListSearchClientMatchUseCase";

class ListSearchClientMatchController {
  constructor(private listSearchClientUseCase: ListSearchClientMatchUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {status,type} = req.body;

    console.log(status,type)

   await collections.searchClient.find({
    status,type
  //   "$and": [{ status: status},
  //   { type: type},
  //   { subType: subType},
  //   { uf: uf},
  //   { city: city},
  //   { pets: pets},
  //   { furnished: furnished},
  //   { bedroom: { $gte: bedroom } },
  //   { suite: { $gte: suite } },
  //   { restroom: { $gte: restroom } },
  //   { garage: { $gte: garage } },
  // ],
}).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListSearchClientMatchController };
