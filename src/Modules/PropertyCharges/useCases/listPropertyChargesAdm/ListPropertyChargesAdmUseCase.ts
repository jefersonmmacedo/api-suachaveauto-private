import { collections } from "../../../../../services/database.service";
import { PropertyCharges } from "../../models/PropertyCharges";
import { IPropertyChargesRepository } from "../../repositories/IPropertyChargesRepository";

class ListPropertyChargesAdmUseCase {
  constructor(private PropertyChargesAdmRepository: IPropertyChargesRepository) {
    " ";
  }

  async execute() {
   const PropertyChargesAdm = await collections.propertyCharges.find({});
   const PropertyChargesAdmAll = PropertyChargesAdm.toArray(function(err, result){
    console.log(result)
    return result;
   })
  //console.log(PropertyChargesAdmAll)
        }
  }

export { ListPropertyChargesAdmUseCase };
