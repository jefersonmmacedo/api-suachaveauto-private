import { collections } from "../../../../../services/database.service";
import { Documents } from "../../models/Documents";
import { IDocumentsRepository } from "../../repositories/IDocumentsRepository";

class ListDocumentsUseCase {
  constructor(private DocumentsRepository: IDocumentsRepository) {
    " ";
  }

  async execute() {
   const Documents = await collections.documentAuto.find({});
   const DocumentsAll = Documents.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(DocumentsAll)
        }
  }

export { ListDocumentsUseCase };
