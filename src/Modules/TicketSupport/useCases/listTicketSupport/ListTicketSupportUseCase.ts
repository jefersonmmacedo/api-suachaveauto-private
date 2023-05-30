import { collections } from "../../../../../services/database.service";
import { ITicketSupportRepository } from "../../repositories/ITicketSupportRepository";

class ListTicketSupportUseCase {
  constructor(private TicketSupportsRepository: ITicketSupportRepository) {
    " ";
  }

  async execute() {
    
   const TicketSupport = await collections.ticketSupport.find({});
   const TicketSupportAll = TicketSupport.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(TicketSupportAll)
        }
  }

export { ListTicketSupportUseCase };
