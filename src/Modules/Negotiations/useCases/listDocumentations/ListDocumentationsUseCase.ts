import { collections } from "../../../../../services/database.service";
import { Documentations } from "../../models/Documentations";
import { IDocumentationsRepository } from "../../repositories/IDocumentationsRepository";

class ListDocumentationsUseCase {
  constructor(private DocumentationsRepository: IDocumentationsRepository) {
    " ";
  }

  async execute() {
   const Documentations = await collections.documentations.find({});
   const DocumentationsAll = Documentations.toArray(function(err, result){
   // console.log(result)
    return result;
   })
console.log(DocumentationsAll)
        }
  }

export { ListDocumentationsUseCase };
