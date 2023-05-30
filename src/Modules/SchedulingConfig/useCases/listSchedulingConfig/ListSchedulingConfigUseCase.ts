import { collections } from "../../../../../services/database.service";
import { SchedulingConfig } from "../../models/SchedulingConfig";
import { ISchedulingConfigRepository } from "../../repositories/ISchedulingConfigRepository";

class ListSchedulingConfigUseCase {
  constructor(private SchedulingConfigRepository: ISchedulingConfigRepository) {
    " ";
  }

  async execute() {
   const SchedulingConfig = await collections.schedulingConfig.find({});
   const SchedulingConfigAll = SchedulingConfig.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(SchedulingConfigAll)
        }
  }

export { ListSchedulingConfigUseCase };
