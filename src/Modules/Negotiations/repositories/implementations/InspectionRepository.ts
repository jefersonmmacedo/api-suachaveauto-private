import { Inspection } from "../../models/Inspection";
import { IInspectionRepository, IInspectionDTO } from "../IInspectionRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class InspectionRepository implements IInspectionRepository {
  private inspection: Inspection[];

  private static INSTANCE: InspectionRepository;

  private constructor() {
    this.inspection = [];
  }

  public static getInstance(): InspectionRepository {
    if (!InspectionRepository.INSTANCE) {
      InspectionRepository.INSTANCE = new InspectionRepository();
    }

    return InspectionRepository.INSTANCE;
  }


  async create({idCompany, idClient, idNegotiations, inspection, images}: IInspectionDTO) {
    const inspections: Inspection = new Inspection();
      const idMini = uuidv4()
      const id = idMini.substring(0,8)
      Object.assign(inspection, {
        id, _id: id, idCompany, idClient, idNegotiations, inspection, images, created_at: new Date(),
      });
      this.inspection.push(inspections);
      
      await collections.inspection.insertOne(inspections).then((result) => {
        //console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }


  list(){ }

  update({id, idCompany, idClient, idNegotiations, inspection, images}):void {}

  async delete({id}) {
    await collections.inspection.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { InspectionRepository };




