import { collections } from "../../../../../services/database.service";
import { LocatorCompany } from "../../models/LocatorCompany";
import { ILocatorCompanyRepository } from "../../repositories/ILocatorCompanyRepository";

class ListLocatorCompanyAdmUseCase {
  constructor(private LocatorCompanyAdmRepository: ILocatorCompanyRepository) {
    " ";
  }

  async execute() {
   const LocatorCompanyAdm = await collections.locatorCompany.find({});
   const LocatorCompanyAdmAll = LocatorCompanyAdm.toArray(function(err, result){
    console.log(result)
    return result;
   })
  //console.log(LocatorCompanyAdmAll)
        }
  }

export { ListLocatorCompanyAdmUseCase };
