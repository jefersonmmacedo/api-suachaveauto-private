import { INegotiationsRepository } from "../../repositories/INegotiationsRepository";

class DeleteNegotiationsUseCase {
  constructor(private commentsRepository: INegotiationsRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteNegotiationsUseCase };
