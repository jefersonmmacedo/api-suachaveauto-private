import { ICompanyRepository } from "../../repositories/ICompanyRepository";

class DeleteCompanyUseCase {
  constructor(private commentsRepository: ICompanyRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteCompanyUseCase };
