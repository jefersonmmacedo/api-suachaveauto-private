import { DocumentationsRepository } from "../../repositories/implementations/DocumentationsRepository";
import { CreateDocumentationsController } from "./CreateDocumentationsController";
import { CreateDocumentationsUseCase } from "./CreateDocumentationsUseCase";

const documentationsRepository = DocumentationsRepository.getInstance();

const createDocumentationsUseCase = new CreateDocumentationsUseCase(documentationsRepository);

const createDocumentationsController = new CreateDocumentationsController(createDocumentationsUseCase);

export { createDocumentationsController };
