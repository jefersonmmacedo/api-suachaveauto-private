import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { ListPropertyFullDataUseCase } from "./ListPropertyFullDataUseCase";
import { ListPropertyFullDataController } from "./ListPropertyFullDataController";

const propertyRepository = PropertyRepository.getInstance();

const listPropertyFullDataUsecase = new ListPropertyFullDataUseCase(propertyRepository);

const listPropertyFullDataController = new ListPropertyFullDataController(listPropertyFullDataUsecase);

export { listPropertyFullDataController };
