import { IViewAutoRepository } from "../../repositories/IViewAutoRepository";

interface IRequest {
  id: string;
  idAuto: string;
  idClient: string;
  idCompany: string;
  origin: string;
  latitude: string;
  longitude: string;
  brand: string;
  model: string;
}

 
class CreateViewAutoUseCase {
  constructor(private ViewAutoRepository: IViewAutoRepository) {
    " ";
  }

  execute({ id, idAuto, idClient, idCompany, origin, latitude, longitude, brand, model, }: IRequest): void {
    this.ViewAutoRepository.create({
      id, idAuto, idClient, idCompany, origin, latitude, longitude, brand, model,
    });
  }
}

export { CreateViewAutoUseCase };
