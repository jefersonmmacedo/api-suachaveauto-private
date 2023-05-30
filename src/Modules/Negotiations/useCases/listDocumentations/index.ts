import { DocumentationsRepository } from "../../repositories/implementations/DocumentationsRepository";
import { ListDocumentationsUseCase } from "./ListDocumentationsUseCase";
import { ListDocumentationsController } from "./ListDocumentationsController";

const documentationsRepository = DocumentationsRepository.getInstance();

const listDocumentationsUsecase = new ListDocumentationsUseCase(documentationsRepository);

const listDocumentationsController = new ListDocumentationsController(listDocumentationsUsecase);

export { listDocumentationsController };
