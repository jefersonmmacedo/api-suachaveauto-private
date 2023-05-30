import { IContactRepository } from "../../repositories/IContactRepository";

class DeleteContactUseCase {
  constructor(private commentsRepository: IContactRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteContactUseCase };
