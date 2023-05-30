import { IAlertClientRepository } from "../../repositories/IAlertClientRepository";

interface IRequest {
  id: string;
  idProperty: string;
  
  email: string;
  name: string;
  whatsapp: string;

  district: string;
  city: string;
  uf: string;

  status: string;
  type: string;
  subType: string;

  pets: string;
  furnished: string;
  bedroom: string;
  
  suite: string;
  restroom: string;
  garage: string;
}
class CreateAlertClientUseCase {
  constructor(private AlertClientRepository: IAlertClientRepository) {
    " ";
  }

  execute({ id, idProperty, email, name, whatsapp,  district, city, uf, status, pets, furnished, type, subType, bedroom, suite, restroom, garage, }: IRequest): void {

    this.AlertClientRepository.create({
      id, idProperty, email, name, whatsapp,  district, city, uf, status, pets, furnished, type, subType, bedroom, suite, restroom, garage,
    });
  }
}

export { CreateAlertClientUseCase };
