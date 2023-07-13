import { collections } from "../../../../../services/database.service";
import { Autos } from "../../models/Autos";
import { IAutosRepository } from "../../repositories/IAutosRepository";

class ListAutosAllUseCase {
  constructor(private AutosRepository: IAutosRepository) {
    " ";
  }

  async execute() {
   const Autos = await collections.autos.find({});
   const AutosAll = Autos.toArray(function(err, result){
   // console.log(result)
    return result;
   })
console.log(AutosAll)
        }
  }

export { ListAutosAllUseCase };
