import { EvaluationRepository } from "../../../Evaluation/repositories/implementations/EvaluationRepository";
import { ListEvaluationUseCase } from "./ListEvaluationUseCase";
import { ListEvaluationController } from "./ListEvaluationController";

const evaluationRepository = EvaluationRepository.getInstance();

const listEvaluationUsecase = new ListEvaluationUseCase(evaluationRepository);

const listEvaluationController = new ListEvaluationController(listEvaluationUsecase);

export { listEvaluationController };
