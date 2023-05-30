import { hash } from "bcrypt";
import { IPropertyRepository } from "../../repositories/IPropertyRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idCompany: string;
  avatarCompany: string;
  nameCompany: string;
  idLocator: string;
  title: string;
  number: string;
  cep: string;
  road: string;
  district: string;
  city: string;
  uf: string;
  reference: string;
  complement: string;
  description: string;
  type: string;
  subType: string;
  status: string;
  newProperty: string;
  firstLease: string;
  availability: string;
  bedroom: string;
  garage: string;
  suite: string;
  restroom: string;
  furnished: string;
  pets: string;
  priceSale: string;
  priceRent: string;
  textRent: string;
  condominium: string;
  iptu: string;
  otherPrices: string;
  yearOfConstruction: string;
  buildingArea: string;
  siglaBuildingArea: string;
  totalArea: string;
  siglaTotalArea: string;
  images: object;
  featuredImage: string;
  platformVideo: string;
  video: string;
  slider: string;
  financing: string;
  emphasis: boolean;
  characteristcs: object;
  dateUpdate: string;
  latitude: string;
  longitude: string;
codeIptu: string;
codeEnergy: string;
codeWater: string;
informations: string; 
}

class CreatePropertyUseCase {
  constructor(private PropertyRepository: IPropertyRepository) {
    " ";
  }
  
  async execute({
    id, idCompany,avatarCompany, nameCompany, title, number, cep, road, district, city, uf, reference, complement, description, type, subType, status,
    availability, bedroom, garage, suite, restroom, priceSale, priceRent, textRent, condominium, pets, furnished, newProperty, firstLease,
    iptu, otherPrices, buildingArea, siglaBuildingArea, totalArea, siglaTotalArea, yearOfConstruction,
    images, featuredImage, platformVideo, video, slider, financing, characteristcs, emphasis, idLocator, dateUpdate, latitude, longitude,
    codeIptu, codeEnergy, codeWater, informations,
  }: IRequest): Promise<void> {

      await this.PropertyRepository.create({
        id, idCompany,avatarCompany, nameCompany, title, number, cep, road, district, city, uf, reference, complement, description, type, subType, status,
    availability, bedroom, garage, suite, restroom, priceSale, priceRent, textRent, condominium, pets, furnished, newProperty, firstLease,
    iptu, otherPrices, buildingArea, siglaBuildingArea, totalArea, siglaTotalArea, yearOfConstruction,
    images, featuredImage, platformVideo, video, slider, financing, characteristcs, emphasis, idLocator, dateUpdate, latitude, longitude,
    codeIptu, codeEnergy, codeWater, informations,
      });

  }
}

export { CreatePropertyUseCase };
