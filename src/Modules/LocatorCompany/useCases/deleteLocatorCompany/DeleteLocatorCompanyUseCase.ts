import { ILocatorCompanyRepository } from "../../repositories/ILocatorCompanyRepository";

class DeleteLocatorCompanyUseCase {
  constructor(private commentsRepository: ILocatorCompanyRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteLocatorCompanyUseCase };
