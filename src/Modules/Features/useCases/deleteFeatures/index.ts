import { FeaturesRepository } from "../../repositories/implementations/FeaturesRepository";
import { DeleteFeaturesController } from "./DeleteFeaturesController";
import { DeleteFeaturesUseCase } from "./DeleteFeaturesUseCase";

const featuresRepository = FeaturesRepository.getInstance();
const deleteFeaturesUseCase = new DeleteFeaturesUseCase(featuresRepository);
const deleteFeaturesController = new DeleteFeaturesController(deleteFeaturesUseCase);

export { deleteFeaturesController };
