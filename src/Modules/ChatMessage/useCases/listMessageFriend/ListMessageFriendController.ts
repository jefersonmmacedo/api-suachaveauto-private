import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListMessageFriendUseCase } from "./ListMessageFriendUseCase";

class ListMessageFriendController {
  constructor(private listMessageUseCase: ListMessageFriendUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idFriend = req.params
   await collections.messagesRooms.find(idFriend).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListMessageFriendController };
