import { Licensing } from "../models/Licensing";

interface ICreateLicensingDTO {
  id: string;
  licensing: string;
}


interface ILicensingRepository {
  create({
   licensing
  }: ICreateLicensingDTO): void;
  update({
   id, licensing
  }: ICreateLicensingDTO): void;
  list();
  delete({id});
}

export { ILicensingRepository, ICreateLicensingDTO };
