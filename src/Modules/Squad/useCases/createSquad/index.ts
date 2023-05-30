import { SquadRepository } from "../../repositories/implementations/SquadRepository";
import { CreateSquadController } from "./CreateSquadController";
import { CreateSquadUseCase } from "./CreateSquadUseCase";

const squadRepository = SquadRepository.getInstance();

const createSquadUseCase = new CreateSquadUseCase(squadRepository);

const createSquadController = new CreateSquadController(createSquadUseCase);

export { createSquadController };
