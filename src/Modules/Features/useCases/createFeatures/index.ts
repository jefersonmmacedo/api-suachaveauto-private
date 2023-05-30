import { FeaturesRepository } from "../../repositories/implementations/FeaturesRepository";
import { CreateFeaturesController } from "./CreateFeaturesController";
import { CreateFeaturesUseCase } from "./CreateFeaturesUseCase";

const featuresRepository = FeaturesRepository.getInstance();

const createFeaturesUseCase = new CreateFeaturesUseCase(featuresRepository);

const createFeaturesController = new CreateFeaturesController(createFeaturesUseCase);

export { createFeaturesController };
