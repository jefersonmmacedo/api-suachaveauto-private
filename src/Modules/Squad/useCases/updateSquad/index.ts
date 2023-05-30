import { SquadRepository } from "../../repositories/implementations/SquadRepository";
import { UpdateSquadController } from "./UpdateSquadController";
import { UpdateSquadUseCase } from "./UpdateSquadUseCase";

const squadRepository = SquadRepository.getInstance();

const updateSquadUseCase = new UpdateSquadUseCase(squadRepository);

const updateSquadController = new UpdateSquadController(updateSquadUseCase);

export { updateSquadController };
