import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { ListPropertyAdressCityUfUseCase } from "./ListPropertyAdressCityUfUseCase";
import { ListPropertyAdressCityUfController } from "./ListPropertyAdressCityUfController";

const propertyRepository = PropertyRepository.getInstance();

const listPropertyAdressCityUfUsecase = new ListPropertyAdressCityUfUseCase(propertyRepository);

const listPropertyAdressCityUfController = new ListPropertyAdressCityUfController(listPropertyAdressCityUfUsecase);

export { listPropertyAdressCityUfController };
