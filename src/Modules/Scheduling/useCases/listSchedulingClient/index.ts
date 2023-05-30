import { SchedulingRepository } from "../../repositories/implementations/SchedulingRepository";
import { ListSchedulingClientUseCase } from "./ListSchedulingClientUseCase";
import { ListSchedulingClientController } from "./ListSchedulingClientController";

const schedulingRepository = SchedulingRepository.getInstance();

const listSchedulingClientUsecase = new ListSchedulingClientUseCase(schedulingRepository);

const listSchedulingClientController = new ListSchedulingClientController(listSchedulingClientUsecase);

export { listSchedulingClientController };
