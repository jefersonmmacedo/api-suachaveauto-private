import { Request, Response } from "express";
import { CreateAutosUseCase } from "./CreateAutosUseCase";

class CreateAutosController {
  constructor(private createAutosUseCase: CreateAutosUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { 
      id, idCompany, avatarCompany, nameCompany, characteristcs, informations, description, type,
       plate, chassi, brand, model, version, segment, subsegment, doors, color, year, yearModel,
      mileage, march, engineCapacity, direction, fuel, endOfBoard, value, valueFipe, status,
      state, financing, city, uf, cityCompany, ufCompany, horses, video, platformVideo, images,
      featuredImage, emphasis, licensingInfos, availability, bodywork,eletricCar,
     } = req.body;

     console.log( {id, idCompany, avatarCompany, nameCompany, characteristcs, informations, description, type,
      plate, chassi, brand, model, version, segment, subsegment, doors, color, year, yearModel,
     mileage, march, engineCapacity, direction, fuel, endOfBoard, value, valueFipe, status, bodywork,eletricCar,
     state, financing, city, uf, cityCompany, ufCompany, horses, video, platformVideo, images,
     featuredImage, emphasis, licensingInfos, availability})

    this.createAutosUseCase.execute({
      id, idCompany, avatarCompany, nameCompany, characteristcs, informations, description, type,
       plate, chassi, brand, model, version, segment, subsegment, doors, color, year, yearModel,
      mileage, march, engineCapacity, direction, fuel, endOfBoard, value, valueFipe, status,
      state, financing, city, uf, cityCompany, ufCompany, horses, video, platformVideo, images,
      featuredImage, emphasis, licensingInfos, availability, bodywork,eletricCar,
    }).then((result) => {
      console.log(result);
      return res.status(201).json({result: result}).send(result);
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateAutosController };







