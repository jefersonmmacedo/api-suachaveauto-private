import { IContactRepository } from "../../repositories/IContactRepository";

interface IRequest {
  id: string;
  idAuto: string;
  idCompany: string;
  idClient: string;
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  type: string;
  origin: string;
  latitude: string;
  longitude: string;
}

class CreateContactUseCase {
  constructor(private ContactRepository: IContactRepository) {
    " ";
  }

  execute({ id, idAuto, idCompany, idClient, name, email, phone, whatsapp, type, origin, latitude, longitude, }: IRequest): void {
    this.ContactRepository.create({
      id, idAuto, idCompany, idClient, name, email, phone, whatsapp, type, origin, latitude, longitude,
    });
  }
}

export { CreateContactUseCase };
