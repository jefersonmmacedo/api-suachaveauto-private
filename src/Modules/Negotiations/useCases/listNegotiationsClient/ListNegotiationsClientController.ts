import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListNegotiationsClientUseCase } from "./ListNegotiationsClientUseCase";

class ListNegotiationsClientController {
  constructor(private ListNegotiationsClientUseCase: ListNegotiationsClientUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idClient = req.params;
   await collections.negotiations.find(idClient).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
    //  console.log(result)
      return result;
     })
  }
}

export { ListNegotiationsClientController };
