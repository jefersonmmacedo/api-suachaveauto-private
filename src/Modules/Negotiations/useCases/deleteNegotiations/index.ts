import { NegotiationsRepository } from "../../repositories/implementations/NegotiationsRepository";
import { DeleteNegotiationsController } from "./DeleteNegotiationsController";
import { DeleteNegotiationsUseCase } from "./DeleteNegotiationsUseCase";

const negotiationsRepository = NegotiationsRepository.getInstance();
const deleteNegotiationsUseCase = new DeleteNegotiationsUseCase(negotiationsRepository);
const deleteNegotiationsController = new DeleteNegotiationsController(deleteNegotiationsUseCase);

export { deleteNegotiationsController };
