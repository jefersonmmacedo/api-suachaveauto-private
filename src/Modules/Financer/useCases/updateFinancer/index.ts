import { FinancerRepository } from "../../repositories/implementations/FinancerRepository";
import { UpdateFinancerController } from "./UpdateFinancerController";
import { UpdateFinancerUseCase } from "./UpdateFinancerUseCase";

const financerRepository = FinancerRepository.getInstance();

const updateFinancerUseCase = new UpdateFinancerUseCase(financerRepository);

const updateFinancerController = new UpdateFinancerController(updateFinancerUseCase);

export { updateFinancerController };
