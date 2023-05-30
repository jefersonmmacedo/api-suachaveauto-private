import { SchedulingEvaluationRepository } from "../../repositories/implementations/SchedulingEvaluationRepository";
import { ListSchedulingEvaluationUnicCompanyUseCase } from "./ListSchedulingEvaluationUnicCompanyUseCase";
import { ListSchedulingEvaluationUnicCompanyController } from "./ListSchedulingEvaluationUnicCompanyController";

const schedulingEvaluationRepository = SchedulingEvaluationRepository.getInstance();

const listSchedulingEvaluationUnicCompanyUsecase = new ListSchedulingEvaluationUnicCompanyUseCase(schedulingEvaluationRepository);

const listSchedulingEvaluationUnicCompanyController = new ListSchedulingEvaluationUnicCompanyController(listSchedulingEvaluationUnicCompanyUsecase);

export { listSchedulingEvaluationUnicCompanyController };
