import { collections } from "../../../../../services/database.service";
import { DeletedCompany } from "../../models/DeletedCompany";
import { IDeletedCompanyRepository } from "../../repositories/IDeletedCompanyRepository";

class ListDeletedCompanyUseCase {
  constructor(private DeletedCompanyRepository: IDeletedCompanyRepository) {
    " ";
  }

  async execute() {
   const DeletedCompany = await collections.deletedCompany.find({});
   const DeletedCompanyAll = DeletedCompany.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(DeletedCompanyAll)
        }
  }

export { ListDeletedCompanyUseCase };
