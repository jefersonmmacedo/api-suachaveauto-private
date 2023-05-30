import { Inspection } from "../models/Inspection";

interface IInspectionDTO {
  id: string;
  idCompany: string;
  idClient: string;
  idNegotiations: string;
  inspection: string;
  images: object;
}

 
interface IInspectionRepository {
  create({ idCompany, idClient, idNegotiations, inspection, images }: IInspectionDTO): Promise<void>;
  list();
  update({id, idCompany, idClient, idNegotiations, inspection, images }: IInspectionDTO): void;
  delete({id});
}

export { IInspectionRepository, IInspectionDTO };
