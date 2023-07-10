import { Autos } from "../models/Autos";

interface IAutosDTO {
  id: string;
  idCompany: string;
  avatarCompany: string;
  nameCompany: string;
  characteristcs: string;
  informations: string;
  description: string;
  type: string;
  plate: string;
  chassi: string;
  brand: string;
  model: string;
  version: string;
  segment: string;
  subsegment: string;
  doors: string;
  color: string;
  year: string;
  yearModel: string;
  mileage: string;
  march: string;
  engineCapacity: string;
  direction: string;
  fuel: string;
  endOfBoard: string;
  value: string;
  valueFipe: string;
  status: string;
  state: string;
  financing: string;
  city: string;
  uf: string;
  cityCompany: string;
  ufCompany: string;
  horses: string;
  video: string;
  platformVideo: string;
  images: string;
  featuredImage: string;
  emphasis: string;
  licensingInfos: string;
  availability: string;
  bodywork: string;
  eletricCar: string;
  gnv: string;
}

  
interface IAutosRepository {
  create({
    id, idCompany, avatarCompany, nameCompany, characteristcs, informations, description, type,
    plate, chassi, brand, model, version, segment, subsegment, doors, color, year, yearModel,
    mileage, march, engineCapacity, direction, fuel, endOfBoard, value, valueFipe, status,
    state, financing, city, uf, cityCompany, ufCompany, bodywork,
    horses, video, platformVideo, images, featuredImage, emphasis, licensingInfos, availability, eletricCar, gnv 
  }: IAutosDTO): Promise<void>;
  list();
  update({
    id, idCompany, avatarCompany, nameCompany, characteristcs, informations, description, type,
    plate, chassi, brand, model, version, segment, subsegment, doors, color, year, yearModel,
    mileage, march, engineCapacity, direction, fuel, endOfBoard, value, valueFipe, status,
    state, financing, city, uf, cityCompany, ufCompany, bodywork,
    horses, video, platformVideo, images, featuredImage, emphasis, licensingInfos, availability, eletricCar, gnv 
  }: IAutosDTO): void;
  delete({id});
}

export { IAutosRepository, IAutosDTO };

 