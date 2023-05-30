import { collections } from "../../../../../services/database.service";
import { GuarantorCompany } from "../../../GuarantorCompany/models/GuarantorCompany";
import { IGuarantorCompanyRepository } from "../../../GuarantorCompany/repositories/IGuarantorCompanyRepository";

class ListGuarantorCompanyUseCase {
  constructor(private GuarantorCompanyRepository: IGuarantorCompanyRepository) {
    " ";
  }

  async execute() {
   const GuarantorCompany = await collections.guarantorCompany.find({});
   const GuarantorCompanyAll = GuarantorCompany.toArray(function(err, result){
   // console.log(result)
    return result;
   })
console.log(GuarantorCompanyAll)
        }
  }

export { ListGuarantorCompanyUseCase };
