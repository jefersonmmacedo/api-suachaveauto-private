import { IDocumentsRepository } from "../../repositories/IDocumentsRepository";

class DeleteDocumentsUseCase {
  constructor(private commentsRepository: IDocumentsRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteDocumentsUseCase };
