import { TeamRepository } from "../../repositories/implementations/TeamRepository";
import { CreateTeamController } from "./CreateTeamController";
import { CreateTeamUseCase } from "./CreateTeamUseCase";

const teamRepository = TeamRepository.getInstance();

const createTeamUseCase = new CreateTeamUseCase(teamRepository);

const createTeamController = new CreateTeamController(createTeamUseCase);

export { createTeamController };
