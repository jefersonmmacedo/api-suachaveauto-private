import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { ListPropertyEmphasisUseCase } from "./ListPropertyEmphasisUseCase";
import { ListPropertyEmphasisController } from "./ListPropertyEmphasisController";

const propertyRepository = PropertyRepository.getInstance();

const listPropertyEmphasisUsecase = new ListPropertyEmphasisUseCase(propertyRepository);

const listPropertyEmphasisController = new ListPropertyEmphasisController(listPropertyEmphasisUsecase);

export { listPropertyEmphasisController };
