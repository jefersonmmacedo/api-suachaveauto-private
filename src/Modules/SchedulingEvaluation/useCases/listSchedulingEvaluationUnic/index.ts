import { SchedulingEvaluationRepository } from "../../repositories/implementations/SchedulingEvaluationRepository";
import { ListSchedulingEvaluationUnicUseCase } from "./ListSchedulingEvaluationUnicUseCase";
import { ListSchedulingEvaluationUnicController } from "./ListSchedulingEvaluationUnicController";

const schedulingEvaluationRepository = SchedulingEvaluationRepository.getInstance();

const listSchedulingEvaluationUnicUsecase = new ListSchedulingEvaluationUnicUseCase(schedulingEvaluationRepository);

const listSchedulingEvaluationUnicController = new ListSchedulingEvaluationUnicController(listSchedulingEvaluationUnicUsecase);

export { listSchedulingEvaluationUnicController };
