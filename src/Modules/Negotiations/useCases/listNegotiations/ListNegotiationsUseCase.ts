import { collections } from "../../../../../services/database.service";
import { Negotiations } from "../../../Negotiations/models/Negotiations";
import { INegotiationsRepository } from "../../../Negotiations/repositories/INegotiationsRepository";

class ListNegotiationsUseCase {
  constructor(private NegotiationsRepository: INegotiationsRepository) {
    " ";
  }

  async execute() {
   const Negotiations = await collections.negotiations.find({});
   const NegotiationsAll = Negotiations.toArray(function(err, result){
   // console.log(result)
    return result;
   })
console.log(NegotiationsAll)
        }
  }

export { ListNegotiationsUseCase };
