import { IPropertyRepository } from "../../repositories/IPropertyRepository";

class DeletePropertyUseCase {
  constructor(private commentsRepository: IPropertyRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeletePropertyUseCase };
