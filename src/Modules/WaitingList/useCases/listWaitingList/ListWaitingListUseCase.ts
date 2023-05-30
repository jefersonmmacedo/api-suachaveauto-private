import { collections } from "../../../../../services/database.service";
import { WaitingList } from "../../models/WaitingList";
import { IWaitingListRepository } from "../../repositories/IWaitingListRepository";

class ListWaitingListUseCase {
  constructor(private WaitingListRepository: IWaitingListRepository) {
    " ";
  }

  async execute() {
   const WaitingList = await collections.waitingList.find({});
   const WaitingListAll = WaitingList.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(WaitingListAll)
        }
  }

export { ListWaitingListUseCase };
