import { collections } from "../../../../../services/database.service";
import { Autos } from "../../../Autos/models/Autos";
import { IAutosRepository } from "../../../Autos/repositories/IAutosRepository";

class ListAutosUseCase {
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

export { ListAutosUseCase };
