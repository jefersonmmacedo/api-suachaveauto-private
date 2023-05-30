import { SchedulingRepository } from "../../repositories/implementations/SchedulingRepository";
import { UpdateSchedulingStatusController } from "./UpdateSchedulingStatusController";
import { UpdateSchedulingStatusUseCase } from "./UpdateSchedulingStatusUseCase";

const schedulingRepository = SchedulingRepository.getInstance();

const updateSchedulingStatusUseCase = new UpdateSchedulingStatusUseCase(schedulingRepository);

const updateSchedulingStatusController = new UpdateSchedulingStatusController(updateSchedulingStatusUseCase);

export { updateSchedulingStatusController };
