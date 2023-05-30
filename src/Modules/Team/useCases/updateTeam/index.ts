import { TeamRepository } from "../../repositories/implementations/TeamRepository";
import { UpdateTeamController } from "./UpdateTeamController";
import { UpdateTeamUseCase } from "./UpdateTeamUseCase";

const teamRepository = TeamRepository.getInstance();

const updateTeamUseCase = new UpdateTeamUseCase(teamRepository);

const updateTeamController = new UpdateTeamController(updateTeamUseCase);

export { updateTeamController };
