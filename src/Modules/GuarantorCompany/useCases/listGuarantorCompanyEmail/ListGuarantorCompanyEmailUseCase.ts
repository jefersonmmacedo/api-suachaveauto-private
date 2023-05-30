import { collections } from "../../../../../services/database.service";
import { GuarantorCompany } from "../../models/GuarantorCompany";
import { IGuarantorCompanyRepository } from "../../repositories/IGuarantorCompanyRepository";

class ListGuarantorCompanyEmailUseCase {
  constructor(private GuarantorCompanyRepository: IGuarantorCompanyRepository) {
    " ";
  }

  async execute() {
   const GuarantorCompany = await collections.guarantorCompany.find({});
   const GuarantorCompanyAll = GuarantorCompany.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(GuarantorCompanyAll)
        }
  }

export { ListGuarantorCompanyEmailUseCase };
