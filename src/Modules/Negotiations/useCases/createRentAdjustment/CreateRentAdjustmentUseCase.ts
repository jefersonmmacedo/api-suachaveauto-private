import { hash } from "bcrypt";
import { IRentAdjustmentRepository } from "../../repositories/IRentAdjustmentRepository";
import { Request, Response } from "express";

interface IRequest {
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

class CreateRentAdjustmentUseCase {
  constructor(private RentAdjustmentRepository: IRentAdjustmentRepository) {
    " ";
  }
  
  async execute({
    id, idCompany, idContract, value, oldValueReadjustment, valueContract, condominium,
    iptu, otherPrices, fireInsurance, readjustmentType, readjustmentModel
  }: IRequest): Promise<void> {

      await this.RentAdjustmentRepository.create({
        id, idCompany, idContract, value, oldValueReadjustment, valueContract, condominium,
        iptu, otherPrices, fireInsurance, readjustmentType, readjustmentModel
      });

  }
}

export { CreateRentAdjustmentUseCase };


