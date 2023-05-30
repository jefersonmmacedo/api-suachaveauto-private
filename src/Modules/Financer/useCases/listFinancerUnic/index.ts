import { FinancerRepository } from "../../repositories/implementations/FinancerRepository";
import { ListFinancerUnicController } from "./ListFinancerUnicController";
import { ListFinancerUnicUseCase } from "./ListFinancerUnicUseCase";

const financerRepository = FinancerRepository.getInstance();

const listFinancerUnicUsecase = new ListFinancerUnicUseCase(financerRepository);

const listFinancerUnicController = new ListFinancerUnicController(listFinancerUnicUsecase);

export { listFinancerUnicController };
