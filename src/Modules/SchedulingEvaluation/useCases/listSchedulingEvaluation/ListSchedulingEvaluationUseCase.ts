import { collections } from "../../../../../services/database.service";
import { SchedulingEvaluation } from "../../../SchedulingEvaluation/models/SchedulingEvaluation";
import { ISchedulingEvaluationRepository } from "../../../SchedulingEvaluation/repositories/ISchedulingEvaluationRepository";

class ListSchedulingEvaluationUseCase {
  constructor(private SchedulingEvaluationRepository: ISchedulingEvaluationRepository) {
    " ";
  }

  async execute() {
   const SchedulingEvaluation = await collections.schedulingEvaluation.find({});
   const SchedulingEvaluationAll = SchedulingEvaluation.toArray(function(err, result){
   // console.log(result)
    return result;
   })
console.log(SchedulingEvaluationAll)
        }
  }

export { ListSchedulingEvaluationUseCase };
