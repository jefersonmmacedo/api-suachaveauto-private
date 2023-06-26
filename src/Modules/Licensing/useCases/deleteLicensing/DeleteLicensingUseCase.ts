import { ILicensingRepository } from "../../repositories/ILicensingRepository";

class DeleteLicensingUseCase {
  constructor(private commentsRepository: ILicensingRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteLicensingUseCase };
