import { IContractsRepository } from "../../repositories/IContractsRepository";

class DeleteContractsUseCase {
  constructor(private commentsRepository: IContractsRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteContractsUseCase };
