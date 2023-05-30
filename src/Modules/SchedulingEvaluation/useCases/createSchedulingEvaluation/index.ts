import { SchedulingEvaluationRepository } from "../../repositories/implementations/SchedulingEvaluationRepository";
import { CreateSchedulingEvaluationController } from "./CreateSchedulingEvaluationController";
import { CreateSchedulingEvaluationUseCase } from "./CreateSchedulingEvaluationUseCase";

const schedulingEvaluationRepository = SchedulingEvaluationRepository.getInstance();

const createSchedulingEvaluationUseCase = new CreateSchedulingEvaluationUseCase(schedulingEvaluationRepository);

const createSchedulingEvaluationController = new CreateSchedulingEvaluationController(createSchedulingEvaluationUseCase);

export { createSchedulingEvaluationController };
