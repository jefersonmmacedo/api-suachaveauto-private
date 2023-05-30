import { collections } from "../../../../../services/database.service";
import { ProcessNotes } from "../../models/ProcessNotes";
import { IProcessNotesRepository } from "../../repositories/IProcessNotesRepository";

class ListProcessNotesUseCase {
  constructor(private ProcessNotesRepository: IProcessNotesRepository) {
    " ";
  }

  async execute() {
   const ProcessNotes = await collections.processNotes.find({});
   const ProcessNotesAll = ProcessNotes.toArray(function(err, result){
   // console.log(result)
    return result;
   })
console.log(ProcessNotesAll)
        }
  }

export { ListProcessNotesUseCase };
