import { ViewAutoRepository } from "../../repositories/implementations/ViewAutoRepository";
import { CreateViewAutoController } from "./CreateViewAutoController";
import { CreateViewAutoUseCase } from "./CreateViewAutoUseCase";

const viewAutoRepository = ViewAutoRepository.getInstance();

const createViewAutoUseCase = new CreateViewAutoUseCase(viewAutoRepository);

const createViewAutoController = new CreateViewAutoController(createViewAutoUseCase);

export { createViewAutoController };
