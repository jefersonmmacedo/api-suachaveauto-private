import { Scheduling } from "../../models/Scheduling";
import { ISchedulingRepository, ISchedulingDTO } from "../ISchedulingRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class SchedulingRepository implements ISchedulingRepository {
  private scheduling: Scheduling[];

  private static INSTANCE: SchedulingRepository;

  private constructor() {
    this.scheduling = [];
  }

  public static getInstance(): SchedulingRepository {
    if (!SchedulingRepository.INSTANCE) {
      SchedulingRepository.INSTANCE = new SchedulingRepository();
    }

    return SchedulingRepository.INSTANCE;
  }

  async create({idClient, idAuto, idCompany, idEvaluation, dataCar, imageAuto, nameClient, avatarClient, email, phone, whatsapp, type, status, meet,
    day, month, year, shift, hour, ownACar,location, address, similarProperties, amountOfPeople, dateCompleted}: ISchedulingDTO) {
    const scheduling: Scheduling = new Scheduling();
      const idMini = uuidv4()
      const id = idMini.substring(0,8)
      Object.assign(scheduling, {
        id, _id: id, idClient, idAuto, idCompany, idEvaluation, dataCar, imageAuto, nameClient, avatarClient, email, phone, whatsapp, type, status, meet,
        day, month, year, shift, hour, ownACar, location, address, similarProperties, amountOfPeople, dateCompleted,created_at: new Date(),
      });
      this.scheduling.push(scheduling);
      
      await collections.scheduling.insertOne(scheduling).then((result) => {
        //console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }



  list(){ }

  update({id, idClient, idAuto, idCompany, idEvaluation, dataCar, imageAuto, email, phone, whatsapp, type, status, meet,
    day, month, year, shift, hour, ownACar, location, address, similarProperties, dateCompleted}):void {}

  async delete({id}) {
    await collections.scheduling.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { SchedulingRepository };




