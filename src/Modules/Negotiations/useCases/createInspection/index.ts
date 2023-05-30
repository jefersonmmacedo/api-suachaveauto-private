import { InspectionRepository } from "../../repositories/implementations/InspectionRepository";
import { CreateInspectionController } from "./CreateInspectionController";
import { CreateInspectionUseCase } from "./CreateInspectionUseCase";

const inspectionRepository = InspectionRepository.getInstance();

const createInspectionUseCase = new CreateInspectionUseCase(inspectionRepository);

const createInspectionController = new CreateInspectionController(createInspectionUseCase);

export { createInspectionController };
