import { IAlertClientRepository } from "../../repositories/IAlertClientRepository";

class DeleteAlertClientUseCase {
  constructor(private commentsRepository: IAlertClientRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteAlertClientUseCase };
