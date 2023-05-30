import { collections } from "../../../../../services/database.service";
import { DeletedClient } from "../../models/DeletedClient";
import { IDeletedClientRepository } from "../../repositories/IDeletedClientRepository";

class ListDeletedClientUserUseCase {
  constructor(private DeletedClientRepository: IDeletedClientRepository) {
    " ";
  }

  async execute() {
   const DeletedClient = await collections.deletedClient.find({});
   const DeletedClientAll = DeletedClient.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(DeletedClientAll)
        }
  }

export { ListDeletedClientUserUseCase };
