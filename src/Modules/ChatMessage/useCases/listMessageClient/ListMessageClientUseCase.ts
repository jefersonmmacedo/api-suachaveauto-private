import { collections } from "../../../../../services/database.service";
import { Message } from "../../models/Message";
import { IMessageRepository } from "../../repositories/IMessageRepository";

class ListMessageClientUseCase {
  constructor(private MessageRepository: IMessageRepository) {
    " ";
  }

  async execute() {
   const Message = await collections.messagesRooms.find({});
   const MessageAll = Message.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(MessageAll)
        }
  }

export { ListMessageClientUseCase };
