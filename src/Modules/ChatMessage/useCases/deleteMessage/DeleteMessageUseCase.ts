import { IMessageRepository } from "../../repositories/IMessageRepository";

class DeleteMessageUseCase {
  constructor(private commentsRepository: IMessageRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteMessageUseCase };
