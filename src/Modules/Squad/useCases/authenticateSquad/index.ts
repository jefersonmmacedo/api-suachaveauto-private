import { SquadRepository } from "../../repositories/implementations/SquadRepository";
import { AuthenticateSquadController } from "./AuthenticateSquadController";
import { AuthenticateSquadUseCase } from "./AuthenticateSquadUseCase";

const squadRepository = SquadRepository.getInstance();

const authenticateSquadUseCase = new AuthenticateSquadUseCase(squadRepository);

const authenticateSquadController = new AuthenticateSquadController(authenticateSquadUseCase);

export { authenticateSquadController };
