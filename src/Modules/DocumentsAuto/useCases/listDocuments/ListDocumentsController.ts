import { Request, Response } from "express";

import { ListDocumentsUseCase } from "./ListDocumentsUseCase";
import { collections } from "../../../../../services/database.service";

class ListDocumentsController {
  constructor(private listDocumentsUseCase: ListDocumentsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.documentAuto.find({}).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListDocumentsController };
