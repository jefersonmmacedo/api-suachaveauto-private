import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateAutosUseCase } from "./UpdateAutosUseCase";
import { hash } from "bcrypt";

class UpdateAutosController {
  constructor(private UpdatAutosUseCase: UpdateAutosUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { idCompany, avatarCompany, nameCompany, characteristcs, informations, description, type,
      plate, chassi, brand, model, version, segment, subsegment, doors, color, year, yearModel,
      mileage, march, engineCapacity, direction, fuel, endOfBoard, value, valueFipe, status,
      state, financing, city, uf, cityCompany, ufCompany, bodywork,
      horses, video, platformVideo, images, featuredImage, emphasis, licensingInfos, availability, eletricCar, gnv } = req.body;
    const id = req.params; 

    await collections.autos.findOneAndUpdate(id, {$set:{idCompany, avatarCompany, nameCompany, characteristcs, informations, description, type,
      plate, chassi, brand, model, version, segment, subsegment, doors, color, year, yearModel,
      mileage, march, engineCapacity, direction, fuel, endOfBoard, value, valueFipe, status,
      state, financing, city, uf, cityCompany, ufCompany, bodywork,
      horses, video, platformVideo, images, featuredImage, emphasis, licensingInfos, availability, eletricCar, gnv }}, {upsert: true}).then((result) => {
      console.log("Status atualizada com sucesso")
      return res.status(201).json(result);

    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateAutosController };
