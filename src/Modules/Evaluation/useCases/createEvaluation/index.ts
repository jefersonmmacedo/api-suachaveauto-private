import { EvaluationRepository } from "../../repositories/implementations/EvaluationRepository";
import { CreateEvaluationController } from "./CreateEvaluationController";
import { CreateEvaluationUseCase } from "./CreateEvaluationUseCase";

const evaluationRepository = EvaluationRepository.getInstance();

const createEvaluationUseCase = new CreateEvaluationUseCase(evaluationRepository);

const createEvaluationController = new CreateEvaluationController(createEvaluationUseCase);

export { createEvaluationController };
