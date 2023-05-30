import { hash } from "bcrypt";
import { IPaymentPropertyChargesRepository } from "../../repositories/IPaymentPropertyChargesRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idCompany: string;
  idLocator: string;
  idProperty: string;
  paymentPropertyCharge: string;
  voucher: string;
  type: string;
  description: string;
  value: string;
  deadline: string;
}



class UpdatePaymentPropertyChargesUseCase {
  constructor(private PaymentPropertyChargesRepository: IPaymentPropertyChargesRepository) {
    " ";
  }
  
  async execute({
    id, idCompany, idLocator, idProperty, paymentPropertyCharge, voucher, type, description, value, deadline, 
   }: IRequest): Promise<void> {
  

      await this.PaymentPropertyChargesRepository.update({
        id, idCompany, idLocator, idProperty, paymentPropertyCharge, voucher, type, description, value, deadline, 
      });

  }
}

export { UpdatePaymentPropertyChargesUseCase };
