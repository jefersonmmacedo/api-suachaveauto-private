import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListRoomClientUseCase } from "./ListRoomClientUseCase";

class ListRoomClientController {
  constructor(private listRoomUseCase: ListRoomClientUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idClient = req.params
   await collections.rooms.find(idClient).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListRoomClientController };
