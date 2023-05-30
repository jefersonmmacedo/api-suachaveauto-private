import { IFeaturesRepository } from "../../repositories/IFeaturesRepository";

interface IRequest {
  id: string;
  feature: string;
}

class CreateFeaturesUseCase {
  constructor(private FeaturesRepository: IFeaturesRepository) {
    " ";
  }

  execute({ id, feature }: IRequest): void {
    this.FeaturesRepository.create({
      id, feature
    });
  }
}

export { CreateFeaturesUseCase };
