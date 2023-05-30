import { collections } from "../../../../../services/database.service";
import { AlertClient } from "../../models/AlertClient";
import { IAlertClientRepository } from "../../repositories/IAlertClientRepository";

class ListAlertClientUserUseCase {
  constructor(private AlertClientRepository: IAlertClientRepository) {
    " ";
  }

  async execute() {
   const AlertClient = await collections.alertClient.find({});
   const AlertClientAll = AlertClient.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(AlertClientAll)
        }
  }

export { ListAlertClientUserUseCase };
