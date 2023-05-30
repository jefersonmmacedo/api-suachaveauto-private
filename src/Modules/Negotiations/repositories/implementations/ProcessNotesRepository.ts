import { ProcessNotes } from "../../models/ProcessNotes";
import { IProcessNotesRepository, IProcessNotesDTO } from "../IProcessNotesRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class ProcessNotesRepository implements IProcessNotesRepository {
  private processNotes: ProcessNotes[];

  private static INSTANCE: ProcessNotesRepository;

  private constructor() {
    this.processNotes = [];
  }

  public static getInstance(): ProcessNotesRepository {
    if (!ProcessNotesRepository.INSTANCE) {
      ProcessNotesRepository.INSTANCE = new ProcessNotesRepository();
    }

    return ProcessNotesRepository.INSTANCE;
  }


  async create({idCompany, idClient, idNegotiations, noteProcess, status, }: IProcessNotesDTO) {
    const processNotes: ProcessNotes = new ProcessNotes();
      const idMini = uuidv4()
      const id = idMini.substring(0,8)
      Object.assign(processNotes, {
        id, _id: id, idCompany, idClient, idNegotiations, noteProcess, status, created_at: new Date(),
      });
      this.processNotes.push(processNotes);
      
      await collections.processNotes.insertOne(processNotes).then((result) => {
        //console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }

  list(){ }

  update({id, idCompany, idClient, idNegotiations, noteProcess, status, }):void {}

  async delete({id}) {
    await collections.processNotes.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { ProcessNotesRepository };




