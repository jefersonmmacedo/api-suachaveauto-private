import { collections } from "../../../../../services/database.service";
import { LocatorCompany } from "../../../LocatorCompany/models/LocatorCompany";
import { ILocatorCompanyRepository } from "../../../LocatorCompany/repositories/ILocatorCompanyRepository";

class ListLocatorCompanyUseCase {
  constructor(private LocatorCompanyRepository: ILocatorCompanyRepository) {
    " ";
  }

  async execute() {
   const LocatorCompany = await collections.locatorCompany.find({});
   const LocatorCompanyAll = LocatorCompany.toArray(function(err, result){
   // console.log(result)
    return result;
   })
console.log(LocatorCompanyAll)
        }
  }

export { ListLocatorCompanyUseCase };
