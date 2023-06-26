import { DocumentsRepository } from "../../repositories/implementations/DocumentsRepository";
import { DeleteDocumentsController } from "./DeleteDocumentsController";
import { DeleteDocumentsUseCase } from "./DeleteDocumentsUseCase";

const documentsRepository = DocumentsRepository.getInstance();
const deleteDocumentsUseCase = new DeleteDocumentsUseCase(documentsRepository);
const deleteDocumentsController = new DeleteDocumentsController(deleteDocumentsUseCase);

export { deleteDocumentsController };
