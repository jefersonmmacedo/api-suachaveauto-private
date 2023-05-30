import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { ListPropertyFullDataCityUfUseCase } from "./ListPropertyFullDataCityUfUseCase";
import { ListPropertyFullDataCityUfController } from "./ListPropertyFullDataCityUfController";

const propertyRepository = PropertyRepository.getInstance();

const listPropertyFullDataCityUfUsecase = new ListPropertyFullDataCityUfUseCase(propertyRepository);

const listPropertyFullDataCityUfController = new ListPropertyFullDataCityUfController(listPropertyFullDataCityUfUsecase);

export { listPropertyFullDataCityUfController };
