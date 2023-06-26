import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListViewAutoUseCase } from "./ListViewAutoUseCase";

class ListViewAutoController {
  constructor(private listViewAutoUseCase: ListViewAutoUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idAuto} = req.params;
    
   await collections.viewAuto.find({idAuto}).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListViewAutoController };
