import { collections } from "../../../../../services/database.service";
import { ITicketRentRepository } from "../../repositories/ITicketRentRepository";

class ListTicketRentUseCase {
  constructor(private TicketRentsRepository: ITicketRentRepository) {
    " ";
  }

  async execute() {
    
   const TicketRent = await collections.ticketRent.find({});
   const TicketRentAll = TicketRent.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(TicketRentAll)
        }
  }

export { ListTicketRentUseCase };
