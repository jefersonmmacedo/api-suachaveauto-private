import { hash } from "bcrypt";
import { IInspectionRepository } from "../../repositories/IInspectionRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idCompany: string;
  idClient: string;
  idNegotiations: string;
  inspection: string;
  images: object;
}

class CreateInspectionUseCase {
  constructor(private InspectionRepository: IInspectionRepository) {
    " ";
  }
  
  async execute({id, idCompany, idClient, idNegotiations, inspection, images}: IRequest): Promise<void> {

      await this.InspectionRepository.create({
        id, idCompany, idClient, idNegotiations, inspection, images 
      });

  }
}

export { CreateInspectionUseCase };


