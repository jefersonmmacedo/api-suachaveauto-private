import { ViewAutoRepository } from "../../repositories/implementations/ViewAutoRepository";
import { ListViewAutoController } from "./ListViewAutoController";
import { ListViewAutoUseCase } from "./ListViewAutoUseCase";

const viewAutoRepository = ViewAutoRepository.getInstance();

const listViewAutoUsecase = new ListViewAutoUseCase(viewAutoRepository);

const listViewAutoController = new ListViewAutoController(listViewAutoUsecase);

export { listViewAutoController };
