import { NegotiationsRepository } from "../../repositories/implementations/NegotiationsRepository";
import { ListNegotiationsCompanyUseCase } from "./ListNegotiationsCompanyUseCase";
import { ListNegotiationsCompanyController } from "./ListNegotiationsCompanyController";

const negotiationsRepository = NegotiationsRepository.getInstance();

const listNegotiationsCompanyUsecase = new ListNegotiationsCompanyUseCase(negotiationsRepository);

const listNegotiationsCompanyController = new ListNegotiationsCompanyController(listNegotiationsCompanyUsecase);

export { listNegotiationsCompanyController };
