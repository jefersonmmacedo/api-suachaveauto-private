import { SquadRepository } from "../../repositories/implementations/SquadRepository";
import { ListSquadUnicUseCase } from "./ListSquadUnicUseCase";
import { ListSquadUnicController } from "./ListSquadUnicController";

const squadRepository = SquadRepository.getInstance();

const listSquadUnicUsecase = new ListSquadUnicUseCase(squadRepository);

const listSquadUnicController = new ListSquadUnicController(listSquadUnicUsecase);

export { listSquadUnicController };
