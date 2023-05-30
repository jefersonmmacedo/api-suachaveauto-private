import { FinancerRepository } from "../../repositories/implementations/FinancerRepository";
import { DeleteFinancerController } from "./DeleteFinancerController";
import { DeleteFinancerUseCase } from "./DeleteFinancerUseCase";

const financerRepository = FinancerRepository.getInstance();
const deleteFinancerUseCase = new DeleteFinancerUseCase(financerRepository);
const deleteFinancerController = new DeleteFinancerController(deleteFinancerUseCase);

export { deleteFinancerController };
