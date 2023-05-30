import { FeaturesRepository } from "../../repositories/implementations/FeaturesRepository";
import { ListFeaturesController } from "./ListFeaturesController";
import { ListFeaturesUseCase } from "./ListFeaturesUseCase";

const featuresRepository = FeaturesRepository.getInstance();

const listFeaturesUsecase = new ListFeaturesUseCase(featuresRepository);

const listFeaturesController = new ListFeaturesController(listFeaturesUsecase);

export { listFeaturesController };
