import { InspectionRepository } from "../../repositories/implementations/InspectionRepository";
import { ListInspectionUseCase } from "./ListInspectionUseCase";
import { ListInspectionController } from "./ListInspectionController";

const inspectionRepository = InspectionRepository.getInstance();

const listInspectionUsecase = new ListInspectionUseCase(inspectionRepository);

const listInspectionController = new ListInspectionController(listInspectionUsecase);

export { listInspectionController };
