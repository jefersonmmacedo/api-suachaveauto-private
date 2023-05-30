import { IClientCompanyRepository } from "../../repositories/IClientCompanyRepository";

class DeleteClientCompanyUseCase {
  constructor(private commentsRepository: IClientCompanyRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteClientCompanyUseCase };
