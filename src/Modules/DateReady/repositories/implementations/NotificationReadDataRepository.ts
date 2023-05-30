import { NotificationReadData } from "../../models/NotificationReadData";
import { ICreateNotificationReadDataDTO, INotificationReadDataRepository } from "../INotificationReadDataRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class NotificationReadDataRepository implements INotificationReadDataRepository {
  private notificationReadData: NotificationReadData[];

  private static INSTANCE: NotificationReadDataRepository;

  private constructor() {
    this.notificationReadData = [];
  }

  public static getInstance(): NotificationReadDataRepository {
    if (!NotificationReadDataRepository.INSTANCE) {
      NotificationReadDataRepository.INSTANCE = new NotificationReadDataRepository();
    }

    return NotificationReadDataRepository.INSTANCE;
  }

 async create({
    idUser, dateReady,
  }: ICreateNotificationReadDataDTO) {
    const notificationReadData: NotificationReadData = new NotificationReadData();
    const _id = uuidv4()
    Object.assign(notificationReadData, {
      _id, id: _id,
      idUser, dateReady,
      created_at: new Date()
    });

    this.notificationReadData.push(notificationReadData);
    console.log(NotificationReadData)
    await collections.notificationReadData.insertOne(notificationReadData).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ }){}

  async delete({id}) {
    await collections.notificationReadData.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { NotificationReadDataRepository };
