import { SchedulingEvaluationRepository } from "../../../SchedulingEvaluation/repositories/implementations/SchedulingEvaluationRepository";
import { ListSchedulingEvaluationUseCase } from "./ListSchedulingEvaluationUseCase";
import { ListSchedulingEvaluationController } from "./ListSchedulingEvaluationController";

const schedulingEvaluationRepository = SchedulingEvaluationRepository.getInstance();

const listSchedulingEvaluationUsecase = new ListSchedulingEvaluationUseCase(schedulingEvaluationRepository);

const listSchedulingEvaluationController = new ListSchedulingEvaluationController(listSchedulingEvaluationUsecase);

export { listSchedulingEvaluationController };
