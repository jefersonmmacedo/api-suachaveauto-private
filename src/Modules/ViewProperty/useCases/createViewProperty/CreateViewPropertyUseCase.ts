import { IViewPropertyRepository } from "../../repositories/IViewPropertyRepository";

interface IRequest {
  id: string;
  idProperty: string;
  idClient: string;
  idCompany: string;
  origin: string;
  latitude: string;
  longitude: string;
  type: string;
  subType: string;
}

 
class CreateViewPropertyUseCase {
  constructor(private ViewPropertyRepository: IViewPropertyRepository) {
    " ";
  }

  execute({ id, idProperty, idClient, idCompany, origin, latitude, longitude, type, subType, }: IRequest): void {
    this.ViewPropertyRepository.create({
      id, idProperty, idClient, idCompany, origin, latitude, longitude, type, subType,
    });
  }
}

export { CreateViewPropertyUseCase };
