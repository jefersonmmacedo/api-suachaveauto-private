import { collections } from "../../../../../services/database.service";
import { Evaluation } from "../../../Evaluation/models/Evaluation";
import { IEvaluationRepository } from "../../../Evaluation/repositories/IEvaluationRepository";

class ListEvaluationUseCase {
  constructor(private EvaluationRepository: IEvaluationRepository) {
    " ";
  }

  async execute() {
   const Evaluation = await collections.evaluation.find({});
   const EvaluationAll = Evaluation.toArray(function(err, result){
   // console.log(result)
    return result;
   })
console.log(EvaluationAll)
        }
  }

export { ListEvaluationUseCase };
