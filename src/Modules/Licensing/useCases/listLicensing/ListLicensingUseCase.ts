import { collections } from "../../../../../services/database.service";
import { Licensing } from "../../models/Licensing";
import { ILicensingRepository } from "../../repositories/ILicensingRepository";

class ListLicensingUseCase {
  constructor(private LicensingRepository: ILicensingRepository) {
    " ";
  }

  async execute() {
   const Licensing = await collections.licensing.find({});
   const LicensingAll = Licensing.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(LicensingAll)
        }
  }

export { ListLicensingUseCase };
