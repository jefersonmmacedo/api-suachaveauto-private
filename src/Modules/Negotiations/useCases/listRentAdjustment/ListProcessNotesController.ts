import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListProcessNotesUseCase } from "./ListProcessNotesUseCase";

class ListProcessNotesController {
  constructor(private listProcessNotesUseCase: ListProcessNotesUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idNegotiations = req.params;
   await collections.processNotes.find(idNegotiations).toArray(function(err, result){
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

export { ListProcessNotesController };
