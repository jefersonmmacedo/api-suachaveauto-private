import { SquadRepository } from "../../repositories/implementations/SquadRepository";
import { ListSquadUseCase } from "./ListSquadUseCase";
import { ListSquadController } from "./ListSquadController";

const squadRepository = SquadRepository.getInstance();

const listSquadUsecase = new ListSquadUseCase(squadRepository);

const listSquadController = new ListSquadController(listSquadUsecase);

export { listSquadController };
