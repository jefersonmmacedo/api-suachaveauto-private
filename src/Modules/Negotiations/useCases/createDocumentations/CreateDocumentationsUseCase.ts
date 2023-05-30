import { hash } from "bcrypt";
import { IDocumentationsRepository } from "../../repositories/IDocumentationsRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idCompany: string;
  idClient: string;
  idNegotiations: string;
  documentations: object;
  type: object;
}

class CreateDocumentationsUseCase {
  constructor(private DocumentationsRepository: IDocumentationsRepository) {
    " ";
  }
  
  async execute({id, idCompany, idClient, idNegotiations, documentations,type,}: IRequest): Promise<void> {

      await this.DocumentationsRepository.create({
        id, idCompany, idClient, idNegotiations, documentations, type,
      });

  }
}

export { CreateDocumentationsUseCase };


