import { IAutosRepository } from "../../repositories/IAutosRepository";

class DeleteAutosUseCase {
  constructor(private commentsRepository: IAutosRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteAutosUseCase };
