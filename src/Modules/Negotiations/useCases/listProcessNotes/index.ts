import { ProcessNotesRepository } from "../../repositories/implementations/ProcessNotesRepository";
import { ListProcessNotesUseCase } from "./ListProcessNotesUseCase";
import { ListProcessNotesController } from "./ListProcessNotesController";

const processNotesRepository = ProcessNotesRepository.getInstance();

const listProcessNotesUsecase = new ListProcessNotesUseCase(processNotesRepository);

const listProcessNotesController = new ListProcessNotesController(listProcessNotesUsecase);

export { listProcessNotesController };
