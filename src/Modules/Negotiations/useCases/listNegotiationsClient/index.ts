import { NegotiationsRepository } from "../../repositories/implementations/NegotiationsRepository";
import { ListNegotiationsClientUseCase } from "./ListNegotiationsClientUseCase";
import { ListNegotiationsClientController } from "./ListNegotiationsClientController";

const negotiationsRepository = NegotiationsRepository.getInstance();

const listNegotiationsClientUsecase = new ListNegotiationsClientUseCase(negotiationsRepository);

const listNegotiationsClientController = new ListNegotiationsClientController(listNegotiationsClientUsecase);

export { listNegotiationsClientController };
