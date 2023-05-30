import { SchedulingEvaluation } from "../../models/SchedulingEvaluation";
import { ISchedulingEvaluationRepository, ISchedulingEvaluationDTO } from "../ISchedulingEvaluationRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class SchedulingEvaluationRepository implements ISchedulingEvaluationRepository {
  private schedulingEvaluation: SchedulingEvaluation[];

  private static INSTANCE: SchedulingEvaluationRepository;

  private constructor() {
    this.schedulingEvaluation = [];
  }

  public static getInstance(): SchedulingEvaluationRepository {
    if (!SchedulingEvaluationRepository.INSTANCE) {
      SchedulingEvaluationRepository.INSTANCE = new SchedulingEvaluationRepository();
    }

    return SchedulingEvaluationRepository.INSTANCE;
  }

  async create({
    idClient, idEvaluation, idCompany, name, email, phone, whatsapp, status, day, month, year, shift, hour, address, dateCompleted,
  }: ISchedulingEvaluationDTO) {
    const schedulingEvaluation: SchedulingEvaluation = new SchedulingEvaluation();
      const idMini = uuidv4()
      const id = idMini.substring(0,8)
      Object.assign(schedulingEvaluation, {
        id, _id: id, idClient, idEvaluation, idCompany, name, email, phone, whatsapp, status, day, month, year, shift, hour, address, dateCompleted,created_at: new Date(),
      });
      this.schedulingEvaluation.push(schedulingEvaluation);
      
      await collections.schedulingEvaluation.insertOne(schedulingEvaluation).then((result) => {
        //console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }



  list(){ }

  update({id, idClient, idEvaluation, idCompany, name, email, phone, whatsapp, status, day, month, year, shift, hour, address, dateCompleted,}):void {}

  async delete({id}) {
    await collections.schedulingEvaluation.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { SchedulingEvaluationRepository };




