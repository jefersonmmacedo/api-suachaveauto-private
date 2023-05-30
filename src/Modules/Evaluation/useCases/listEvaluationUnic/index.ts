import { EvaluationRepository } from "../../repositories/implementations/EvaluationRepository";
import { ListEvaluationUnicUseCase } from "./ListEvaluationUnicUseCase";
import { ListEvaluationUnicController } from "./ListEvaluationUnicController";

const evaluationRepository = EvaluationRepository.getInstance();

const listEvaluationUnicUsecase = new ListEvaluationUnicUseCase(evaluationRepository);

const listEvaluationUnicController = new ListEvaluationUnicController(listEvaluationUnicUsecase);

export { listEvaluationUnicController };
