import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { ListPropertyAdressUseCase } from "./ListPropertyAdressUseCase";
import { ListPropertyAdressController } from "./ListPropertyAdressController";

const propertyRepository = PropertyRepository.getInstance();

const listPropertyAdressUsecase = new ListPropertyAdressUseCase(propertyRepository);

const listPropertyAdressController = new ListPropertyAdressController(listPropertyAdressUsecase);

export { listPropertyAdressController };
