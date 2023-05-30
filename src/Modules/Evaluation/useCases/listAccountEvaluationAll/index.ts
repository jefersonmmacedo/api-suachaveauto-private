import { EvaluationRepository } from "../../repositories/implementations/EvaluationRepository";
import { ListEvaluationAllUseCase } from "./ListEvaluationAllUseCase";
import { ListEvaluationAllController } from "./ListEvaluationAllController";

const evaluationRepository = EvaluationRepository.getInstance();

const listEvaluationAllUsecase = new ListEvaluationAllUseCase(evaluationRepository);

const listEvaluationAllController = new ListEvaluationAllController(listEvaluationAllUsecase);

export { listEvaluationAllController };
