import { ProposalsRepository } from "../../repositories/implementations/ProposalsRepository";
import { ListProposalsUserController } from "./ListProposalsUserController";
import { ListProposalsUserUseCase } from "./ListProposalsUserUseCase";

const proposalsRepository = ProposalsRepository.getInstance();

const listProposalsUserUsecase = new ListProposalsUserUseCase(proposalsRepository);

const listProposalsUserController = new ListProposalsUserController(listProposalsUserUsecase);

export { listProposalsUserController };
