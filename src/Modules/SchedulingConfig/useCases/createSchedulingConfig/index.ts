import { SchedulingConfigRepository } from "../../repositories/implementations/SchedulingConfigRepository";
import { CreateSchedulingConfigController } from "./CreateSchedulingConfigController";
import { CreateSchedulingConfigUseCase } from "./CreateSchedulingConfigUseCase";

const schedulingConfigRepository = SchedulingConfigRepository.getInstance();

const createSchedulingConfigUseCase = new CreateSchedulingConfigUseCase(schedulingConfigRepository);

const createSchedulingConfigController = new CreateSchedulingConfigController(createSchedulingConfigUseCase);

export { createSchedulingConfigController };
