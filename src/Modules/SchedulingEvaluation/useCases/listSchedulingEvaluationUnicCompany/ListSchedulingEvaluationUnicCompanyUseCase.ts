import { collections } from "../../../../../services/database.service";
import { SchedulingEvaluation } from "../../models/SchedulingEvaluation";
import { ISchedulingEvaluationRepository } from "../../repositories/ISchedulingEvaluationRepository";

class ListSchedulingEvaluationUnicCompanyUseCase {
  constructor(private SchedulingEvaluationRepository: ISchedulingEvaluationRepository) {
    " ";
  }

  async execute() {
   const SchedulingEvaluation = await collections.schedulingEvaluation.find({});
   const SchedulingEvaluationAll = SchedulingEvaluation.toArray(function(err, result){
    console.log(result)
    return result;
   })
  //console.log(SchedulingEvaluationAll)
        }
  }

export { ListSchedulingEvaluationUnicCompanyUseCase };
