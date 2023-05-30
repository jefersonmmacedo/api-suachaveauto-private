import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { ListPropertyAdressTypeUseCase } from "./ListPropertyAdressTypeUseCase";
import { ListPropertyAdressTypeController } from "./ListPropertyAdressTypeController";

const propertyRepository = PropertyRepository.getInstance();

const listPropertyAdressTypeUsecase = new ListPropertyAdressTypeUseCase(propertyRepository);

const listPropertyAdressTypeController = new ListPropertyAdressTypeController(listPropertyAdressTypeUsecase);

export { listPropertyAdressTypeController };
