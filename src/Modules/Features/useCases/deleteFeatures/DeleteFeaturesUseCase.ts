import { IFeaturesRepository } from "../../repositories/IFeaturesRepository";

class DeleteFeaturesUseCase {
  constructor(private commentsRepository: IFeaturesRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteFeaturesUseCase };
