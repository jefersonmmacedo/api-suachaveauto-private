import { IFavoriteRepository } from "../../repositories/IFavoriteRepository";

interface IRequest {
  id: string;
  idCompany: string;
  idAuto: string;
  idClient: string;
}

class CreateFavoriteUseCase {
  constructor(private FavoriteRepository: IFavoriteRepository) {
    " ";
  }

  execute({ id, idCompany, idAuto, idClient }: IRequest): void {

    this.FavoriteRepository.create({
      id, idCompany, idAuto, idClient
    });
  }
}

export { CreateFavoriteUseCase };
