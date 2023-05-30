import { collections } from "../../../../../services/database.service";
import { ReplyTicketSupport } from "../../models/ReplyTicketSupport";
import { IReplyTicketSupportRepository } from "../../repositories/IReplyTicketSupportRepository";

class ListReplyTicketSupportUseCase {
  constructor(private ReplyTicketSupportRepository: IReplyTicketSupportRepository) {
    " ";
  }

  async execute() {
    
   const ReplyTicketSupport = await collections.replyTicketSupport.find({});
   const ReplyTicketSupportAll = ReplyTicketSupport.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(ReplyTicketSupportAll)
        }
  }

export { ListReplyTicketSupportUseCase };
