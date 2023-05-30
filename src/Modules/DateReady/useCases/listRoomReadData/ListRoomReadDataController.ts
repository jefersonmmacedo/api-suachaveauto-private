import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListRoomReadDataUseCase } from "./ListRoomReadDataUseCase";

class ListRoomReadDataController {
  constructor(private listRoomReadDataUseCase: ListRoomReadDataUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idRoom, idUser} = req.params;
   await collections.roomReadData.find({idRoom, idUser}).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListRoomReadDataController };
