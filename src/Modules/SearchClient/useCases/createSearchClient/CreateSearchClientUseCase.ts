import { ISearchClientRepository } from "../../repositories/ISearchClientRepository";

interface IRequest {
  id: string;
  email: string;
  name: string;
  whatsapp: string;
  district: string;
  city: string;
  uf: string;
  status: string;
  pets: string;
  furnished: string;
  type: string;
  subType: string;
  bedroom: string;
  suite: string;
  restroom: string;
  garage: string;
}
 class CreateSearchClientUseCase {
  constructor(private SearchClientRepository: ISearchClientRepository) {
    " ";
  }

  execute({ id, email, name, whatsapp, district, city, uf, status, pets, furnished, type, subType, bedroom, suite, restroom, garage, }: IRequest): void {

    this.SearchClientRepository.create({
      id, email, name, whatsapp, district, city, uf, status, pets, furnished, type, subType, bedroom, suite, restroom, garage,
    });
  }
}

export { CreateSearchClientUseCase };
