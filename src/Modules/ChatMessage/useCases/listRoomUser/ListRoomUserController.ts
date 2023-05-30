import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListRoomUserUseCase } from "./ListRoomUserUseCase";

class ListRoomUserController {
  constructor(private listRoomUseCase: ListRoomUserUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idCompany = req.params
   await collections.rooms.find(idCompany).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListRoomUserController };
