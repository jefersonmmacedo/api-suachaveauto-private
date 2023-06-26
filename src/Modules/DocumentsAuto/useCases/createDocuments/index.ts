import { DocumentsRepository } from "../../repositories/implementations/DocumentsRepository";
import { CreateDocumentsController } from "./CreateDocumentsController";
import { CreateDocumentsUseCase } from "./CreateDocumentsUseCase";

const documentsRepository = DocumentsRepository.getInstance();

const createDocumentsUseCase = new CreateDocumentsUseCase(documentsRepository);

const createDocumentsController = new CreateDocumentsController(createDocumentsUseCase);

export { createDocumentsController };
