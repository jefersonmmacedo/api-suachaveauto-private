import { TeamRepository } from "../../repositories/implementations/TeamRepository";
import { AuthenticateTeamController } from "./AuthenticateTeamController";
import { AuthenticateTeamUseCase } from "./AuthenticateTeamUseCase";

const teamRepository = TeamRepository.getInstance();

const authenticateTeamUseCase = new AuthenticateTeamUseCase(teamRepository);

const authenticateTeamController = new AuthenticateTeamController(authenticateTeamUseCase);

export { authenticateTeamController };
