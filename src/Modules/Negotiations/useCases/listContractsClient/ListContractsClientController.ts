import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListContractsClientUseCase } from "./ListContractsClientUseCase";

class ListContractsClientController {
  constructor(private listContractsClientUseCase: ListContractsClientUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const cpfClient = req.params;
   await collections.contracts.find(cpfClient).toArray(function(err, result){
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

export { ListContractsClientController };
