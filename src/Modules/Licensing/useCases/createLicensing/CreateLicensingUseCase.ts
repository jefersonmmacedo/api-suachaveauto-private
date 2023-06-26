import { ILicensingRepository } from "../../repositories/ILicensingRepository";

interface IRequest {
  id: string;
  licensing: string;
}

class CreateLicensingUseCase {
  constructor(private LicensingRepository: ILicensingRepository) {
    " ";
  }

  execute({ id, licensing }: IRequest): void {
    this.LicensingRepository.create({
      id, licensing
    });
  }
}

export { CreateLicensingUseCase };
