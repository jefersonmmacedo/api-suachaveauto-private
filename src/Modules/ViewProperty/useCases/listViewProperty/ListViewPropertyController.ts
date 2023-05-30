import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListViewPropertyUseCase } from "./ListViewPropertyUseCase";

class ListViewPropertyController {
  constructor(private listViewPropertyUseCase: ListViewPropertyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idProperty} = req.params;
    
   await collections.viewProperty.find({idProperty}).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListViewPropertyController };
