import { DocumentsRepository } from "../../repositories/implementations/DocumentsRepository";
import { ListDocumentsController } from "./ListDocumentsController";
import { ListDocumentsUseCase } from "./ListDocumentsUseCase";

const documentsRepository = DocumentsRepository.getInstance();

const listDocumentsUsecase = new ListDocumentsUseCase(documentsRepository);

const listDocumentsController = new ListDocumentsController(listDocumentsUsecase);

export { listDocumentsController };
