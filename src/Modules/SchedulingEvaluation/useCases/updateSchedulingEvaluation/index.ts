import { SchedulingEvaluationRepository } from "../../repositories/implementations/SchedulingEvaluationRepository";
import { UpdateSchedulingEvaluationController } from "./UpdateSchedulingEvaluationController";
import { UpdateSchedulingEvaluationUseCase } from "./UpdateSchedulingEvaluationUseCase";

const schedulingEvaluationRepository = SchedulingEvaluationRepository.getInstance();

const updateSchedulingEvaluationUseCase = new UpdateSchedulingEvaluationUseCase(schedulingEvaluationRepository);

const updateSchedulingEvaluationController = new UpdateSchedulingEvaluationController(updateSchedulingEvaluationUseCase);

export { updateSchedulingEvaluationController };
