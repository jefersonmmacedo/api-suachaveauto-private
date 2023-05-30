import { TeamRepository } from "../../repositories/implementations/TeamRepository";
import { ListTeamUnicUseCase } from "./ListTeamUnicUseCase";
import { ListTeamUnicController } from "./ListTeamUnicController";

const teamRepository = TeamRepository.getInstance();

const listTeamUnicUsecase = new ListTeamUnicUseCase(teamRepository);

const listTeamUnicController = new ListTeamUnicController(listTeamUnicUsecase);

export { listTeamUnicController };
