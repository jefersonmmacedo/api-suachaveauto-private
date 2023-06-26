import { hash } from "bcrypt";
import { INegotiationsRepository } from "../../repositories/INegotiationsRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idCompany: string;
  idTeam: string;
  idClient: string;
  nameClient: string;
  cpfClient: string;
  idAuto: string;
  typeNegotiation: string;
  status: string;
  deadline: string;
  parcel: string;
  valueProperty: string;
  amountofCharges: string;
  valueTotal: string;
  typeOfInsurance: string;
}

class CreateNegotiationsUseCase {
  constructor(private NegotiationsRepository: INegotiationsRepository) {
    " ";
  }
  
  async execute({id, idCompany, idTeam, idClient, nameClient, cpfClient, idAuto, typeNegotiation, status, deadline, parcel, valueProperty, amountofCharges, valueTotal, typeOfInsurance}: IRequest): Promise<void> {

      await this.NegotiationsRepository.create({
        id, idCompany, idTeam, idClient, nameClient, cpfClient, idAuto, typeNegotiation, status, deadline, parcel, valueProperty, amountofCharges, valueTotal, typeOfInsurance 
      });

  }
}

export { CreateNegotiationsUseCase };


