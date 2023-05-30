import { SchedulingEvaluationRepository } from "../../repositories/implementations/SchedulingEvaluationRepository";
import { ListSchedulingEvaluationClientUseCase } from "./ListSchedulingEvaluationClientUseCase";
import { ListSchedulingEvaluationClientController } from "./ListSchedulingEvaluationClientController";

const schedulingEvaluationRepository = SchedulingEvaluationRepository.getInstance();

const listSchedulingEvaluationClientUsecase = new ListSchedulingEvaluationClientUseCase(schedulingEvaluationRepository);

const listSchedulingEvaluationClientController = new ListSchedulingEvaluationClientController(listSchedulingEvaluationClientUsecase);

export { listSchedulingEvaluationClientController };
