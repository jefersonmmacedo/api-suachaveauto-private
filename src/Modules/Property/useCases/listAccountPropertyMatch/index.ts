import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { ListPropertyMatchUseCase } from "./ListPropertyMatchUseCase";
import { ListPropertyMatchController } from "./ListPropertyMatchController";

const propertyRepository = PropertyRepository.getInstance();

const listPropertyMatchUsecase = new ListPropertyMatchUseCase(propertyRepository);

const listPropertyMatchController = new ListPropertyMatchController(listPropertyMatchUsecase);

export { listPropertyMatchController };
