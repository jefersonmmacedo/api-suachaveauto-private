import { Documents } from "../models/Documents";

interface ICreateDocumentsDTO {
  id: string;
  document: string;
}


interface IDocumentsRepository {
  create({
   document
  }: ICreateDocumentsDTO): void;
  update({
   id, document
  }: ICreateDocumentsDTO): void;
  list();
  delete({id});
}

export { IDocumentsRepository, ICreateDocumentsDTO };
