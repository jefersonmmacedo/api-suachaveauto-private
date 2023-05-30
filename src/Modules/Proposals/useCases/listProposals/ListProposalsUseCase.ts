import { collections } from "../../../../../services/database.service";
import { Proposals } from "../../models/Proposals";
import { IProposalsRepository } from "../../repositories/IProposalsRepository";

class ListProposalsUseCase {
  constructor(private ProposalsRepository: IProposalsRepository) {
    " ";
  }

  async execute() {
   const Proposals = await collections.proposals.find({});
   const ProposalsAll = Proposals.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(ProposalsAll)
        }
  }

export { ListProposalsUseCase };
