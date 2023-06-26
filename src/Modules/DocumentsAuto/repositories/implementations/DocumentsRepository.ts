import { collections } from "../../../../../services/database.service";
import { Documents } from "../../models/Documents";
import { ICreateDocumentsDTO, IDocumentsRepository } from "../IDocumentsRepository";

import { v4 as uuidv4 } from 'uuid'

class DocumentsRepository implements IDocumentsRepository {
  private documents: Documents[];

  private static INSTANCE: DocumentsRepository;

  private constructor() {
    this.documents = [];
  }

  public static getInstance(): DocumentsRepository {
    if (!DocumentsRepository.INSTANCE) {
      DocumentsRepository.INSTANCE = new DocumentsRepository();
    }

    return DocumentsRepository.INSTANCE;
  }

 async create({
  document
  }: ICreateDocumentsDTO) {
    const documents: Documents = new Documents();
    const _id = uuidv4()
    Object.assign(documents, {
      _id, id: _id,
      document,
      created_at: new Date()
    });

    this.documents.push(documents);
    console.log(Documents)
    await collections.documentAuto.insertOne(documents).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ }){}

  async delete({id}) {
    await collections.documentAuto.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { DocumentsRepository };
