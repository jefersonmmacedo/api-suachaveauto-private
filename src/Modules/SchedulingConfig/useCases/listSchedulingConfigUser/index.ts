import { SchedulingConfigRepository } from "../../repositories/implementations/SchedulingConfigRepository";
import { ListSchedulingConfigUserController } from "./ListSchedulingConfigUserController";
import { ListSchedulingConfigUserUseCase } from "./ListSchedulingConfigUserUseCase";

const schedulingConfigRepository = SchedulingConfigRepository.getInstance();

const listSchedulingConfigUserUsecase = new ListSchedulingConfigUserUseCase(schedulingConfigRepository);

const listSchedulingConfigUserController = new ListSchedulingConfigUserController(listSchedulingConfigUserUsecase);

export { listSchedulingConfigUserController };
