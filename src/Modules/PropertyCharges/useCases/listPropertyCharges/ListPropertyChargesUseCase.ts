import { collections } from "../../../../../services/database.service";
import { PropertyCharges } from "../../../PropertyCharges/models/PropertyCharges";
import { IPropertyChargesRepository } from "../../../PropertyCharges/repositories/IPropertyChargesRepository";

class ListPropertyChargesUseCase {
  constructor(private PropertyChargesRepository: IPropertyChargesRepository) {
    " ";
  }

  async execute() {
   const PropertyCharges = await collections.propertyCharges.find({});
   const PropertyChargesAll = PropertyCharges.toArray(function(err, result){
   // console.log(result)
    return result;
   })
console.log(PropertyChargesAll)
        }
  }

export { ListPropertyChargesUseCase };
