import { PropertyChargesRepository } from "../../repositories/implementations/PropertyChargesRepository";
import { ListPropertyChargesAdmUseCase } from "./ListPropertyChargesAdmUseCase";
import { ListPropertyChargesAdmController } from "./ListPropertyChargesAdmController";

const propertyChargesAdmRepository = PropertyChargesRepository.getInstance();

const listPropertyChargesAdmUsecase = new ListPropertyChargesAdmUseCase(propertyChargesAdmRepository);

const listPropertyChargesAdmController = new ListPropertyChargesAdmController(listPropertyChargesAdmUsecase);

export { listPropertyChargesAdmController };
