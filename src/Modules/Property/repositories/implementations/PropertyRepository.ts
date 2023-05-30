import { Property } from "../../models/Property";
import { IPropertyRepository, IPropertyDTO } from "../IPropertyRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class PropertyRepository implements IPropertyRepository {
  private property: Property[];

  private static INSTANCE: PropertyRepository;

  private constructor() {
    this.property = [];
  }

  public static getInstance(): PropertyRepository {
    if (!PropertyRepository.INSTANCE) {
      PropertyRepository.INSTANCE = new PropertyRepository();
    }

    return PropertyRepository.INSTANCE;
  }

  
  
  async create({ 
    id, idCompany,avatarCompany, nameCompany, title, number, cep, road, district, city, uf, description, type, subType, status,
    availability, bedroom, garage, suite, restroom, priceSale, priceRent, textRent, condominium, pets, furnished, newProperty, firstLease,
    iptu, otherPrices, buildingArea, siglaBuildingArea, totalArea, siglaTotalArea, yearOfConstruction,
    images, featuredImage, platformVideo, video, slider, financing, characteristcs, emphasis, dateUpdate, latitude, longitude,
    codeIptu, codeEnergy, codeWater, informations,
  }: IPropertyDTO) {
    const property: Property = new Property();
      Object.assign(property, {
        id: `imob-${id}`, _id: `imob-${id}`, idCompany,avatarCompany, nameCompany, title, number, cep, road, district, city, uf, description, type, subType, status,
        availability, bedroom, garage, suite, restroom, priceSale, priceRent, textRent, condominium, pets, furnished, newProperty, firstLease,
        iptu, otherPrices, buildingArea, siglaBuildingArea, totalArea, siglaTotalArea, yearOfConstruction,
        images, featuredImage, platformVideo, video, slider, financing, characteristcs, emphasis, dateUpdate, latitude, longitude,
        codeIptu, codeEnergy, codeWater, informations, created_at: new Date(),
      });
      this.property.push(property);
      
      await collections.property.insertOne(property).then((result) => {
        console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }

  list(){ }

  update({  id, idLocator, title, road, district, city, uf, description, type, subType, status, newProperty, firstLease,
    availability, bedroom, garage, suite, restroom, furnished, pets, priceSale, priceRent, textRent, buildingArea,
    siglaBuildingArea, totalArea, siglaTotalArea, yearOfConstruction, images, featuredImage,
    platformVideo, video, slider, financing, characteristcs, }):void {}

  async delete({id}) {
    await collections.property.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { PropertyRepository };




