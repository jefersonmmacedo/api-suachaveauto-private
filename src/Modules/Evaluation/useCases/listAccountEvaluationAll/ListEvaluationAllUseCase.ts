import { collections } from "../../../../../services/database.service";
import { Evaluation } from "../../models/Evaluation";
import { IEvaluationRepository } from "../../repositories/IEvaluationRepository";

class ListEvaluationAllUseCase {
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

export { ListEvaluationAllUseCase };
