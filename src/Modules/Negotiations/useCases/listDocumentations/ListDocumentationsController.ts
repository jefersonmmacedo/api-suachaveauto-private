import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListDocumentationsUseCase } from "./ListDocumentationsUseCase";

class ListDocumentationsController {
  constructor(private listDocumentationsUseCase: ListDocumentationsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idNegotiations = req.params;
   await collections.documentations.find(idNegotiations).toArray(function(err, result){
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

export { ListDocumentationsController };
