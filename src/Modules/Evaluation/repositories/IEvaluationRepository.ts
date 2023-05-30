import { Evaluation } from "../models/Evaluation";

interface IEvaluationDTO {
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

interface IEvaluationRepository {
  create({
    idCompany, idClient, title, description, type, subType, status, road, district, city, uf, bedroom, garage, suite, restroom,
    furnished, pets, characteristcs, images, featuredImage, name, email, phone, whatsapp, 
  }: IEvaluationDTO): Promise<void>;
  list();
  delete({id});
}

export { IEvaluationRepository, IEvaluationDTO };
