import { collections } from "../../../../../services/database.service";
import { MessageReadData } from "../../models/MessageReadData";
import { IMessageReadDataRepository } from "../../repositories/IMessageReadDataRepository";

class ListMessageReadDataUseCase {
  constructor(private MessageReadDataRepository: IMessageReadDataRepository) {
    " ";
  }

  async execute() {
   const MessageReadData = await collections.messageReadData.find({});
   const MessageReadDataAll = MessageReadData.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(MessageReadDataAll)
        }
  }

export { ListMessageReadDataUseCase };
