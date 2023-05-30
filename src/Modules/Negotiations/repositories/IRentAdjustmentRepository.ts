import { RentAdjustment } from "../models/RentAdjustment";

interface IRentAdjustmentDTO {
  id: string;
  idCompany: string;
  idContract: string;
  value: string;
  oldValueReadjustment: string;
  valueContract: string;
  condominium: string;
  iptu: string;
  otherPrices: string;
  fireInsurance: string;
  readjustmentType: string; //IGPM
  readjustmentModel: string; // % ou Fixo
}
  
interface IRentAdjustmentRepository {
  create({
    idCompany, idContract, value, oldValueReadjustment, valueContract, condominium,
    iptu, otherPrices, fireInsurance, readjustmentType, readjustmentModel
  }: IRentAdjustmentDTO): Promise<void>;
  list();
  update({
    id, idCompany, idContract, value, oldValueReadjustment, valueContract, condominium,
    iptu, otherPrices, fireInsurance, readjustmentType, readjustmentModel
  }: IRentAdjustmentDTO): void;
  delete({id});
}

export { IRentAdjustmentRepository, IRentAdjustmentDTO };




