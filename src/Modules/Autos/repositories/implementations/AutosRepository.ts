import { Autos } from "../../models/Autos";
import { IAutosRepository, IAutosDTO } from "../IAutosRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class AutosRepository implements IAutosRepository {
  private autos: Autos[];

  private static INSTANCE: AutosRepository;

  private constructor() {
    this.autos = [];
  }

  public static getInstance(): AutosRepository {
    if (!AutosRepository.INSTANCE) {
      AutosRepository.INSTANCE = new AutosRepository();
    }

    return AutosRepository.INSTANCE;
  }

  
  
  async create({ 
    id, idCompany, avatarCompany, nameCompany, characteristcs, informations, description, type,
    plate, chassi, brand, model, version, segment, subsegment, doors, color, year, yearModel,
    mileage, march, engineCapacity, direction, fuel, endOfBoard, value, valueFipe, status,
    state, financing, city, uf, cityCompany, ufCompany, bodywork,
    horses, video, platformVideo, images, featuredImage, emphasis, licensingInfos, availability,eletricCar, gnv, phone,
  }: IAutosDTO) {
    const AutoNew: Autos = new Autos();
      Object.assign(AutoNew, {
        id: `auto-${id}`, _id: `auto-${id}`, idCompany, avatarCompany, nameCompany, characteristcs, informations, description, type,
        plate, chassi, brand, model, version, segment, subsegment, doors, color, year, yearModel,
        mileage, march, engineCapacity, direction, fuel, endOfBoard, value, valueFipe, status,
        state, financing, city, uf, cityCompany, ufCompany, bodywork,
        horses, video, platformVideo, images, featuredImage, emphasis, licensingInfos, availability,eletricCar, gnv, phone, 
        created_at: new Date(),
      });
      this.autos.push(AutoNew);
      
      await collections.autos.insertOne(AutoNew).then((result) => {
        console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }

  list(){ }

  update({  id, idCompany, avatarCompany, nameCompany, characteristcs, informations, description, type,
     plate, chassi, brand, model, version, segment, subsegment, doors, color, year, yearModel,
    mileage, march, engineCapacity, direction, fuel, endOfBoard, value, valueFipe, status, bodywork,
    state, financing, city, uf, cityCompany, ufCompany, horses, video, platformVideo, images,
    featuredImage, emphasis, licensingInfos, availability, eletricCar, gnv, phone, }):void {}

  async delete({id}) {
    await collections.autos.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { AutosRepository };




