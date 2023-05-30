import { collections } from "../../../../../services/database.service";
import { GuarantorCompany } from "../../models/GuarantorCompany";
import { IGuarantorCompanyRepository } from "../../repositories/IGuarantorCompanyRepository";

class ListGuarantorCompanyAdmUseCase {
  constructor(private GuarantorCompanyAdmRepository: IGuarantorCompanyRepository) {
    " ";
  }

  async execute() {
   const GuarantorCompanyAdm = await collections.guarantorCompany.find({});
   const GuarantorCompanyAdmAll = GuarantorCompanyAdm.toArray(function(err, result){
    console.log(result)
    return result;
   })
  //console.log(GuarantorCompanyAdmAll)
        }
  }

export { ListGuarantorCompanyAdmUseCase };
