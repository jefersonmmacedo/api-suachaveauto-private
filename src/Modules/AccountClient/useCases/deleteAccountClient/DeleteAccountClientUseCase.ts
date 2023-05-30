import { IAccountClientRepository } from "../../repositories/IAccountClientRepository";

class DeleteAccountClientUseCase {
  constructor(private account: IAccountClientRepository) {
    ("");
  }

  async execute({id}){

   await this.account.delete({id});
  }
}

export { DeleteAccountClientUseCase };
