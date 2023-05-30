import { collections } from "../../../../../services/database.service";
import { Features } from "../../models/Features";
import { IFeaturesRepository } from "../../repositories/IFeaturesRepository";

class ListFeaturesUseCase {
  constructor(private FeaturesRepository: IFeaturesRepository) {
    " ";
  }

  async execute() {
   const Features = await collections.features.find({});
   const FeaturesAll = Features.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(FeaturesAll)
        }
  }

export { ListFeaturesUseCase };
