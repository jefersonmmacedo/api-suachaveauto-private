import { WebSiteClientRepository } from "../../repositories/implementations/WebSiteClientRepository";
import { CreateWebSiteClientController } from "./CreateWebSiteClientController";
import { CreateWebSiteClientUseCase } from "./CreateWebSiteClientUseCase";

const webSiteClientRepository = WebSiteClientRepository.getInstance();

const createWebSiteClientUseCase = new CreateWebSiteClientUseCase(webSiteClientRepository);

const createWebSiteClientController = new CreateWebSiteClientController(createWebSiteClientUseCase);

export { createWebSiteClientController };
