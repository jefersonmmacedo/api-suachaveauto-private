import { IBankRepository } from "../../repositories/IBankRepository";

class DeleteBankUseCase {
  constructor(private commentsRepository: IBankRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteBankUseCase };
