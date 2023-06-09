import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPlainsUseCase } from "./ListPlainsUseCase";

class ListPlainsController {
  constructor(private listPostseCase: ListPlainsUseCase) {
    ("");
  }


  async handle(req: Request, res: Response) {
    const page = req.query.page;
    const limit = req.query.limit;

console.log(page)
console.log(limit)
await collections.plains.find({}).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListPlainsController };
