import { WebSiteClientRepository } from "../../repositories/implementations/WebSiteClientRepository";
import { ListWebSiteClientController } from "./ListWebSiteClientController";
import { ListWebSiteClientUseCase } from "./ListWebSiteClientUseCase";

const webSiteClientRepository = WebSiteClientRepository.getInstance();

const listWebSiteClientUsecase = new ListWebSiteClientUseCase(webSiteClientRepository);

const listWebSiteClientController = new ListWebSiteClientController(listWebSiteClientUsecase);

export { listWebSiteClientController };
