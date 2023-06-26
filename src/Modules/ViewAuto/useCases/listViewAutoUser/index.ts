import { ViewAutoRepository } from "../../repositories/implementations/ViewAutoRepository";
import { ListViewAutoUserController } from "./ListViewAutoUserController";
import { ListViewAutoUserUseCase } from "./ListViewAutoUserUseCase";

const viewAutoRepository = ViewAutoRepository.getInstance();

const listViewAutoUserUsecase = new ListViewAutoUserUseCase(viewAutoRepository);

const listViewAutoUserController = new ListViewAutoUserController(listViewAutoUserUsecase);

export { listViewAutoUserController };
