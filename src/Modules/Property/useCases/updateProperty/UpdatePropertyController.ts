import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdatePropertyUseCase } from "./UpdatePropertyUseCase";

class UpdatePropertyController {
  constructor(private UpdatePropertyUseCase: UpdatePropertyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {title, number, cep, road, district, city, uf, reference, complement, description, type, subType, status,
      availability, bedroom, garage, suite, restroom, priceSale, priceRent, textRent, condominium, pets, furnished, newProperty, firstLease,
      iptu, otherPrices, buildingArea, siglaBuildingArea, totalArea, siglaTotalArea, yearOfConstruction,
      images, featuredImage, platformVideo, video, slider, financing, characteristcs, emphasis, idLocator, dateUpdate, latitude, longitude,
      codeIptu, codeEnergy, codeWater, informations, } = req.body;
    const id = req.params; 


    await collections.property.findOneAndUpdate(id, {$set:{title, number, cep, road, district, city, uf, reference, complement, description, type, subType, status,
      availability, bedroom, garage, suite, restroom, priceSale, priceRent, textRent, condominium, pets, furnished, newProperty, firstLease,
      iptu, otherPrices, buildingArea, siglaBuildingArea, totalArea, siglaTotalArea, yearOfConstruction,
      images, featuredImage, platformVideo, video, slider, financing, characteristcs, emphasis, idLocator, dateUpdate, latitude, longitude,
      codeIptu, codeEnergy, codeWater, informations,}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdatePropertyController };

