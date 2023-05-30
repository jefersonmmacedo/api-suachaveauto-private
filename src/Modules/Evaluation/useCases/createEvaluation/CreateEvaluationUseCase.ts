import { hash } from "bcrypt";
import { IEvaluationRepository } from "../../repositories/IEvaluationRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idCompany: string;
  idClient: string;
  title: string;
  description: string;
  type: string;
  subType: string;
  status: string;
  road: string;
  district: string;
  city: string;
  uf: string;
  bedroom: string;
  garage: string;
  suite: string;
  restroom: string;
  furnished: string;
  pets: string;
  characteristcs: object;
  images: object;
  featuredImage: string;
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
}

class CreateEvaluationUseCase {
  constructor(private EvaluationRepository: IEvaluationRepository) {
    " ";
  }
  
  async execute({
    id, idCompany, idClient, title, description, type, subType, status, road, district, city, uf, bedroom, garage, suite, restroom,
    furnished, pets, characteristcs, images, featuredImage, name, email, phone, whatsapp, 
  }: IRequest): Promise<void> {

      await this.EvaluationRepository.create({
        id, idCompany, idClient, title, description, type, subType, status, road, district, city, uf, bedroom, garage, suite, restroom,
        furnished, pets, characteristcs, images, featuredImage, name, email, phone, whatsapp, 
      });

  }
}

export { CreateEvaluationUseCase };