import { TeamRepository } from "../../repositories/implementations/TeamRepository";
import { ListTeamUseCase } from "./ListTeamUseCase";
import { ListTeamController } from "./ListTeamController";

const teamRepository = TeamRepository.getInstance();

const listTeamUsecase = new ListTeamUseCase(teamRepository);

const listTeamController = new ListTeamController(listTeamUsecase);

export { listTeamController };
