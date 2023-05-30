import { IAccessRepository } from "../../repositories/IAccessRepository";

interface IRequest {
  id: string;
  idCompany: string;
  idTeam: string;
  device: string;
  browser: string;
  latitude: string;
  longitude: string;
  ipDevice: string;
}

class CreateAccessUseCase {
  constructor(private AccessRepository: IAccessRepository) {
    " ";
  }

  execute({ id, idCompany, idTeam, device, browser, latitude, longitude, ipDevice, }: IRequest): void {
    this.AccessRepository.create({
      id, idCompany, idTeam, device, browser, latitude, longitude, ipDevice,
    });
  }
}

export { CreateAccessUseCase };
