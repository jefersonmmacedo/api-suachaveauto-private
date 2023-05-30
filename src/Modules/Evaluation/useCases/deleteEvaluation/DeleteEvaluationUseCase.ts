import { IEvaluationRepository } from "../../repositories/IEvaluationRepository";

class DeleteEvaluationUseCase {
  constructor(private commentsRepository: IEvaluationRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteEvaluationUseCase };
