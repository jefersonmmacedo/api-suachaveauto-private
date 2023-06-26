import { collections } from "../../../../../services/database.service";
import { Autos } from "../../models/Autos";
import { IAutosRepository } from "../../repositories/IAutosRepository";

class ListAutosTypeUseCase {
  constructor(private AutosRepository: IAutosRepository) {
    " ";
  }

  async execute() {
   const Autos = await collections.autos.find({});
   const AutosType = Autos.toArray(function(err, result){
   // console.log(result)
    return result;
   })
console.log(AutosType)
        }
  }

export { ListAutosTypeUseCase };
