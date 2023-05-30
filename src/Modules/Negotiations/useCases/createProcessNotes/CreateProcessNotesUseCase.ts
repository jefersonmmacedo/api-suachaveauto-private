import { hash } from "bcrypt";
import { IProcessNotesRepository } from "../../repositories/IProcessNotesRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idCompany: string;
  idClient: string;
  idNegotiations: string;
  noteProcess: string;
  status: string;
}

class CreateProcessNotesUseCase {
  constructor(private ProcessNotesRepository: IProcessNotesRepository) {
    " ";
  }
  
  async execute({id, idCompany, idClient, idNegotiations, noteProcess, status,}: IRequest): Promise<void> {

      await this.ProcessNotesRepository.create({
        id, idCompany, idClient, idNegotiations, noteProcess, status, 
      });

  }
}

export { CreateProcessNotesUseCase };


