import { Documentations } from "../../models/Documentations";
import { IDocumentationsRepository, IDocumentationsDTO } from "../IDocumentationsRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class DocumentationsRepository implements IDocumentationsRepository {
  private documentations: Documentations[];

  private static INSTANCE: DocumentationsRepository;

  private constructor() {
    this.documentations = [];
  }

  public static getInstance(): DocumentationsRepository {
    if (!DocumentationsRepository.INSTANCE) {
      DocumentationsRepository.INSTANCE = new DocumentationsRepository();
    }

    return DocumentationsRepository.INSTANCE;
  }


  async create({idCompany, idClient, idNegotiations, documentations,type,}: IDocumentationsDTO) {
    const documentation: Documentations = new Documentations();
      const idMini = uuidv4()
      const id = idMini.substring(0,8)
      Object.assign(documentation, {
        id, _id: id, idCompany, idClient, idNegotiations, documentations,type, valueTotalcreated_at: new Date(),
      });
      this.documentations.push(documentation);
      
      await collections.documentations.insertOne(documentation).then((result) => {
        //console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }

  list(){ }

  update({id, idCompany, idClient, idNegotiations, documentations,type}):void {}

  async delete({id}) {
    await collections.documentations.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { DocumentationsRepository };




