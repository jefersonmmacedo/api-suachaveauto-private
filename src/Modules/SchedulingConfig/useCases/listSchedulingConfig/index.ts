import { SchedulingConfigRepository } from "../../repositories/implementations/SchedulingConfigRepository";
import { ListSchedulingConfigController } from "./ListSchedulingConfigController";
import { ListSchedulingConfigUseCase } from "./ListSchedulingConfigUseCase";

const schedulingConfigRepository = SchedulingConfigRepository.getInstance();

const listSchedulingConfigUsecase = new ListSchedulingConfigUseCase(schedulingConfigRepository);

const listSchedulingConfigController = new ListSchedulingConfigController(listSchedulingConfigUsecase);

export { listSchedulingConfigController };
