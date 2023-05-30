import { Documentations } from "../models/Documentations";

interface IDocumentationsDTO {
  id: string;
  idCompany: string;
  idClient: string;
  idNegotiations: string;
  documentations: object;
  type: object;
}




interface IDocumentationsRepository {
  create({ idCompany, idClient, idNegotiations, documentations, type }: IDocumentationsDTO): Promise<void>;
  list();
  update({id, idCompany, idClient, idNegotiations, documentations, type }: IDocumentationsDTO): void;
  delete({id});
}

export { IDocumentationsRepository, IDocumentationsDTO };
