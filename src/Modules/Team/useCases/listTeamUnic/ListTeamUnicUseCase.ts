import { collections } from "../../../../../services/database.service";
import { Team } from "../../models/Team";
import { ITeamRepository } from "../../repositories/ITeamRepository";

class ListTeamUnicUseCase {
  constructor(private TeamRepository: ITeamRepository) {
    " ";
  }

  async execute() {
   const Team = await collections.team.find({});
   const TeamAll = Team.toArray(function(err, result){
    console.log(result)
    return result;
   })
  //console.log(TeamAll)
        }
  }

export { ListTeamUnicUseCase };
