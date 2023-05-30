import { collections } from "../../../../../services/database.service";
import { Contracts } from "../../models/Contracts";
import { IContractsRepository } from "../../repositories/IContractsRepository";

class ListContractsUnicUseCase {
  constructor(private ContractsUnicRepository: IContractsRepository) {
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

export { ListContractsUnicUseCase };
