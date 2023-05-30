import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { ListPropertyAdressDistrictUseCase } from "./ListPropertyAdressDistrictUseCase";
import { ListPropertyAdressDistrictController } from "./ListPropertyAdressDistrictController";

const propertyRepository = PropertyRepository.getInstance();

const listPropertyAdressDistrictUsecase = new ListPropertyAdressDistrictUseCase(propertyRepository);

const listPropertyAdressDistrictController = new ListPropertyAdressDistrictController(listPropertyAdressDistrictUsecase);

export { listPropertyAdressDistrictController };
