import { SchedulingConfig } from "../../models/SchedulingConfig";
import { ICreateSchedulingConfigDTO, ISchedulingConfigRepository } from "../ISchedulingConfigRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class SchedulingConfigRepository implements ISchedulingConfigRepository {
  private schedulingConfig: SchedulingConfig[];

  private static INSTANCE: SchedulingConfigRepository;

  private constructor() {
    this.schedulingConfig = [];
  }

  public static getInstance(): SchedulingConfigRepository {
    if (!SchedulingConfigRepository.INSTANCE) {
      SchedulingConfigRepository.INSTANCE = new SchedulingConfigRepository();
    }

    return SchedulingConfigRepository.INSTANCE;
  }

 async create({
  idCompany, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday,
  }: ICreateSchedulingConfigDTO) {
    const schedulingConfig: SchedulingConfig = new SchedulingConfig();
    const _id = uuidv4()
    Object.assign(schedulingConfig, {
      _id, id: _id,
      idCompany, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday,
      created_at: new Date()
    });

    this.schedulingConfig.push(schedulingConfig);
    console.log(SchedulingConfig)
    await collections.schedulingConfig.insertOne(schedulingConfig).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ }){}

  async delete({id}) {
    await collections.schedulingConfig.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { SchedulingConfigRepository };
