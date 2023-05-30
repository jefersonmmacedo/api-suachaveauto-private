import { SquadRepository } from "../../repositories/implementations/SquadRepository";
import { DeleteSquadController } from "./DeleteSquadController";
import { DeleteSquadUseCase } from "./DeleteSquadUseCase";

const squadRepository = SquadRepository.getInstance();
const deleteSquadUseCase = new DeleteSquadUseCase(squadRepository);
const deleteSquadController = new DeleteSquadController(deleteSquadUseCase);

export { deleteSquadController };
