import { collections } from "../../../../../services/database.service";
import { Inspection } from "../../models/Inspection";
import { IInspectionRepository } from "../../repositories/IInspectionRepository";

class ListInspectionUseCase {
  constructor(private InspectionRepository: IInspectionRepository) {
    " ";
  }

  async execute() {
   const Inspection = await collections.inspection.find({});
   const InspectionAll = Inspection.toArray(function(err, result){
   // console.log(result)
    return result;
   })
console.log(InspectionAll)
        }
  }

export { ListInspectionUseCase };
