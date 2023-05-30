import { WebSiteClientRepository } from "../../repositories/implementations/WebSiteClientRepository";
import { ListWebSiteClientCompanyController } from "./ListWebSiteClientCompanyController";
import { ListWebSiteClientCompanyUseCase } from "./ListWebSiteClientCompanyUseCase";

const webSiteClientRepository = WebSiteClientRepository.getInstance();

const listWebSiteClientCompanyUsecase = new ListWebSiteClientCompanyUseCase(webSiteClientRepository);

const listWebSiteClientCompanyController = new ListWebSiteClientCompanyController(listWebSiteClientCompanyUsecase);

export { listWebSiteClientCompanyController };
