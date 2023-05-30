import { ProposalsRepository } from "../../repositories/implementations/ProposalsRepository";
import { CreateProposalsController } from "./CreateProposalsController";
import { CreateProposalsUseCase } from "./CreateProposalsUseCase";

const proposalsRepository = ProposalsRepository.getInstance();

const createProposalsUseCase = new CreateProposalsUseCase(proposalsRepository);

const createProposalsController = new CreateProposalsController(createProposalsUseCase);

export { createProposalsController };
