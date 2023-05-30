import { collections } from "../../../../../services/database.service";
import { RoomReadData } from "../../models/RoomReadData";
import { IRoomReadDataRepository } from "../../repositories/IRoomReadDataRepository";

class ListRoomReadDataUseCase {
  constructor(private RoomReadDataRepository: IRoomReadDataRepository) {
    " ";
  }

  async execute() {
   const RoomReadData = await collections.roomReadData.find({});
   const RoomReadDataAll = RoomReadData.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(RoomReadDataAll)
        }
  }

export { ListRoomReadDataUseCase };
