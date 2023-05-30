import { RentAdjustment } from "../../models/RentAdjustment";
import { IRentAdjustmentRepository, IRentAdjustmentDTO } from "../IRentAdjustmentRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class RentAdjustmentRepository implements IRentAdjustmentRepository {
  private rentAdjustment: RentAdjustment[];

  private static INSTANCE: RentAdjustmentRepository;

  private constructor() {
    this.rentAdjustment = [];
  }

  public static getInstance(): RentAdjustmentRepository {
    if (!RentAdjustmentRepository.INSTANCE) {
      RentAdjustmentRepository.INSTANCE = new RentAdjustmentRepository();
    }

    return RentAdjustmentRepository.INSTANCE;
  }


  async create({idCompany, idContract, value, oldValueReadjustment, valueContract, condominium,
    iptu, otherPrices, fireInsurance, readjustmentType, readjustmentModel }: IRentAdjustmentDTO) {
    const RentAdjustments: RentAdjustment = new RentAdjustment();
      const idMini = uuidv4()
      const id = idMini.substring(0,8)
      Object.assign(RentAdjustment, {
        id, _id: id, idCompany, idContract, value, oldValueReadjustment, valueContract, condominium,
        iptu, otherPrices, fireInsurance, readjustmentType, readjustmentModel, created_at: new Date(),
      });
      this.rentAdjustment.push(RentAdjustments);
      
      await collections.rentAdjustment.insertOne(RentAdjustments).then((result) => {
        //console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }

  list(){ }

  update({id, idCompany, idContract, value, oldValueReadjustment, valueContract, condominium,
    iptu, otherPrices, fireInsurance, readjustmentType, readjustmentModel }):void {}

  async delete({id}) {
    await collections.rentAdjustment.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { RentAdjustmentRepository };




