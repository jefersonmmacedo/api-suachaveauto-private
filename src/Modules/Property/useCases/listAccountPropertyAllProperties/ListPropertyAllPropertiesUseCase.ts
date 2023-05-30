import { collections } from "../../../../../services/database.service";
import { Property } from "../../models/Property";
import { IPropertyRepository } from "../../repositories/IPropertyRepository";

class ListPropertyAllPropertiesUseCase {
  constructor(private PropertyRepository: IPropertyRepository) {
    " ";
  }

  async execute() {
   const Property = await collections.property.find({});
   const PropertyAllProperties = Property.toArray(function(err, result){
    return result;
   })
        }
  }

export { ListPropertyAllPropertiesUseCase };
