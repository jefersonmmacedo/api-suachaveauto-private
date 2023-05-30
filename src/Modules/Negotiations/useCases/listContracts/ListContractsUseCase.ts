import { collections } from "../../../../../services/database.service";
import { Contracts } from "../../models/Contracts";
import { IContractsRepository } from "../../repositories/IContractsRepository";

class ListContractsUseCase {
  constructor(private ContractsRepository: IContractsRepository) {
    " ";
  }

  async execute() {
   const Contracts = await collections.contracts.find({});
   const ContractsAll = Contracts.toArray(function(err, result){
   // console.log(result)
    return result;
   })
console.log(ContractsAll)
        }
  }

export { ListContractsUseCase };
