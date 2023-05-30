import { IDeletedClientRepository } from "../../repositories/IDeletedClientRepository";

interface IRequest {
  id: string;
  idClient: string;
  Reason: string;
  description: string;
  favorites: string;
  messages: string;
  schedule: string;
}

class CreateDeletedClientUseCase {
  constructor(private DeletedClientRepository: IDeletedClientRepository) {
    " ";
  }

  execute({ id, idClient, Reason, description, favorites, messages, schedule, }: IRequest): void {
    this.DeletedClientRepository.create({
      id, idClient, Reason, description, favorites, messages, schedule,
    });
  }
}

export { CreateDeletedClientUseCase };
