import { ProcessNotesRepository } from "../../repositories/implementations/ProcessNotesRepository";
import { CreateProcessNotesController } from "./CreateProcessNotesController";
import { CreateProcessNotesUseCase } from "./CreateProcessNotesUseCase";

const processNotesRepository = ProcessNotesRepository.getInstance();

const createProcessNotesUseCase = new CreateProcessNotesUseCase(processNotesRepository);

const createProcessNotesController = new CreateProcessNotesController(createProcessNotesUseCase);

export { createProcessNotesController };
