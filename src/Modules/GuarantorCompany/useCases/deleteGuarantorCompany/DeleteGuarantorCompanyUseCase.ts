import { IGuarantorCompanyRepository } from "../../repositories/IGuarantorCompanyRepository";

class DeleteGuarantorCompanyUseCase {
  constructor(private commentsRepository: IGuarantorCompanyRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteGuarantorCompanyUseCase };
