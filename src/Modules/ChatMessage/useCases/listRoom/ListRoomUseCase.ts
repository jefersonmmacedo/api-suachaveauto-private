import { collections } from "../../../../../services/database.service";
import { Room } from "../../models/Room";
import { IRoomRepository } from "../../repositories/IRoomRepository";

class ListRoomUseCase {
  constructor(private RoomRepository: IRoomRepository) {
    " ";
  }

  async execute() {
   const Room = await collections.rooms.find({});
   const RoomAll = Room.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(RoomAll)
        }
  }

export { ListRoomUseCase };
