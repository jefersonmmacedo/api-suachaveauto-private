import { IFinancerRepository } from "../../repositories/IFinancerRepository";

class DeleteFinancerUseCase {
  constructor(private commentsRepository: IFinancerRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteFinancerUseCase };
