import { EvaluationRepository } from "../../repositories/implementations/EvaluationRepository";
import { DeleteEvaluationController } from "./DeleteEvaluationController";
import { DeleteEvaluationUseCase } from "./DeleteEvaluationUseCase";

const evaluationRepository = EvaluationRepository.getInstance();
const deleteEvaluationUseCase = new DeleteEvaluationUseCase(evaluationRepository);
const deleteEvaluationController = new DeleteEvaluationController(deleteEvaluationUseCase);

export { deleteEvaluationController };
