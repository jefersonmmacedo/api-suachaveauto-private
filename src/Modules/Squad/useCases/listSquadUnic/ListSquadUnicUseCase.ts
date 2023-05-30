import { collections } from "../../../../../services/database.service";
import { Squad } from "../../models/Squad";
import { ISquadRepository } from "../../repositories/ISquadRepository";

class ListSquadUnicUseCase {
  constructor(private SquadRepository: ISquadRepository) {
    " ";
  }

  async execute() {
   const Squad = await collections.squad.find({});
   const SquadAll = Squad.toArray(function(err, result){
    console.log(result)
    return result;
   })
  //console.log(SquadAll)
        }
  }

export { ListSquadUnicUseCase };
