import { collections } from "../../../../../services/database.service";
import { LocatorCompany } from "../../models/LocatorCompany";
import { ILocatorCompanyRepository } from "../../repositories/ILocatorCompanyRepository";

class ListLocatorCompanyUnicUseCase {
  constructor(private LocatorCompanyRepository: ILocatorCompanyRepository) {
    " ";
  }

  async execute() {
   const LocatorCompany = await collections.locatorCompany.find({});
   const LocatorCompanyAll = LocatorCompany.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(LocatorCompanyAll)
        }
  }

export { ListLocatorCompanyUnicUseCase };
