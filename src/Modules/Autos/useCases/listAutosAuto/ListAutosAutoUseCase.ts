import { collections } from "../../../../../services/database.service";
import { Autos } from "../../models/Autos";
import { IAutosRepository } from "../../repositories/IAutosRepository";

class ListAutosAutoUseCase {
  constructor(private AutosRepository: IAutosRepository) {
    " ";
  }

  async execute() {
   const Autos = await collections.autos.find({});
   const AutosAuto = Autos.toArray(function(err, result){
   // console.log(result)
    return result;
   })
console.log(AutosAuto)
        }
  }

export { ListAutosAutoUseCase };
