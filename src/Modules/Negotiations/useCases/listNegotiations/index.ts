import { NegotiationsRepository } from "../../../Negotiations/repositories/implementations/NegotiationsRepository";
import { ListNegotiationsUseCase } from "./ListNegotiationsUseCase";
import { ListNegotiationsController } from "./ListNegotiationsController";

const negotiationsRepository = NegotiationsRepository.getInstance();

const listNegotiationsUsecase = new ListNegotiationsUseCase(negotiationsRepository);

const listNegotiationsController = new ListNegotiationsController(listNegotiationsUsecase);

export { listNegotiationsController };
