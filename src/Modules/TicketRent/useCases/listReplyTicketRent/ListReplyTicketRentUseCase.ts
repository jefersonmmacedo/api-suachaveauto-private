import { collections } from "../../../../../services/database.service";
import { ReplyTicketRent } from "../../models/ReplyTicketRent";
import { IReplyTicketRentRepository } from "../../repositories/IReplyTicketRentRepository";

class ListReplyTicketRentUseCase {
  constructor(private ReplyTicketRentRepository: IReplyTicketRentRepository) {
    " ";
  }

  async execute() {
    
   const ReplyTicketRent = await collections.replyTicketRent.find({});
   const ReplyTicketRentAll = ReplyTicketRent.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(ReplyTicketRentAll)
        }
  }

export { ListReplyTicketRentUseCase };
