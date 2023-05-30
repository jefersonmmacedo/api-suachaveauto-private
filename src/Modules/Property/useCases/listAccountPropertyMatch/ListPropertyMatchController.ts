import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPropertyMatchUseCase } from "./ListPropertyMatchUseCase";

class ListPropertyMatchController {
  constructor(private listPropertyMatchUseCase: ListPropertyMatchUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {status} = req.params; 

          const type = req.query.type;
          const subType = req.query.subType;
          const uf = req.query.uf;
          const city = req.query.city;
          const district = req.query.district;
          const bedroom = req.query.bedroom;
          const restroom = req.query.restroom;
          const garage = req.query.garage;
          const suite = req.query.suite;
          const pets = req.query.pets;
          const furnished = req.query.furnished;

          const page = req.query.page;
          const limit = req.query.limit;

    console.log({status, type, subType, uf, city, district, bedroom, restroom, garage, suite, pets, furnished})

   await collections.property.find({
    "$and": [
      { status: { $in: [status, "Aluguel e Venda"] }},
    { type: type},
    { subType: subType},
    { uf: uf},
    { city: city},
    { district: district},
    { bedroom: { $gte: bedroom } },
    { suite: { $gte: suite } },
    { restroom: { $gte: restroom } },
    { garage: { $gte: garage } },
    { pets: pets},
    { furnished: furnished},
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

export { ListPropertyMatchController };




// {
//   "status": status,
//   "uf": uf,
//   "city": city,
//   "bedroom": { $gte: Number(parseInt) } ,
//   "restroom": { $gte: Number(restroom) } ,
//   "garage": { $gte: Number(garage) }
// }
