import { ProposalsRepository } from "../../repositories/implementations/ProposalsRepository";
import { ListProposalsController } from "./ListProposalsController";
import { ListProposalsUseCase } from "./ListProposalsUseCase";

const proposalsRepository = ProposalsRepository.getInstance();

const listProposalsUsecase = new ListProposalsUseCase(proposalsRepository);

const listProposalsController = new ListProposalsController(listProposalsUsecase);

export { listProposalsController };
