import { collections } from "../../../../../services/database.service";
import { NotificationReadData } from "../../models/NotificationReadData";
import { INotificationReadDataRepository } from "../../repositories/INotificationReadDataRepository";

class ListNotificationReadDataUseCase {
  constructor(private NotificationReadDataRepository: INotificationReadDataRepository) {
    " ";
  }

  async execute() {
   const NotificationReadData = await collections.notificationReadData.find({});
   const NotificationReadDataAll = NotificationReadData.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(NotificationReadDataAll)
        }
  }

export { ListNotificationReadDataUseCase };
