import { ISquadRepository } from "../../repositories/ISquadRepository";

class DeleteSquadUseCase {
  constructor(private commentsRepository: ISquadRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteSquadUseCase };
