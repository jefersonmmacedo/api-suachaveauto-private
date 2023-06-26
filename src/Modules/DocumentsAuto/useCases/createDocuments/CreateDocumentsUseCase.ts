import { IDocumentsRepository } from "../../repositories/IDocumentsRepository";

interface IRequest {
  id: string;
  document: string;
}

class CreateDocumentsUseCase {
  constructor(private DocumentsRepository: IDocumentsRepository) {
    " ";
  }

  execute({ id, document }: IRequest): void {
    this.DocumentsRepository.create({
      id, document
    });
  }
}

export { CreateDocumentsUseCase };
