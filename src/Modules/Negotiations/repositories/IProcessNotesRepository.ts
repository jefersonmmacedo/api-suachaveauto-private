import { ProcessNotes } from "../models/ProcessNotes";

interface IProcessNotesDTO {
  id: string;
  idCompany: string;
  idClient: string;
  idNegotiations: string;
  noteProcess: string;
  status: string;
}
  
interface IProcessNotesRepository {
  create({ idCompany, idClient, idNegotiations, noteProcess, status,  }: IProcessNotesDTO): Promise<void>;
  list();
  update({id, idCompany, idClient, idNegotiations, noteProcess, status,  }: IProcessNotesDTO): void;
  delete({id});
}

export { IProcessNotesRepository, IProcessNotesDTO };
