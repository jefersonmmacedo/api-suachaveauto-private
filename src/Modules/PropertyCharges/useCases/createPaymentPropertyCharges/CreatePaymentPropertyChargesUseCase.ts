import { IPaymentPropertyChargesRepository } from "../../repositories/IPaymentPropertyChargesRepository";

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

class CreatePaymentPropertyChargesUseCase {
  constructor(private PaymentPropertyChargesRepository: IPaymentPropertyChargesRepository) {
    " ";
  }
  
  async execute({
    id, idCompany, idLocator, idProperty, paymentPropertyCharge, voucher, type, description, value, deadline,
   }: IRequest): Promise<void> {
  
      await this.PaymentPropertyChargesRepository.create({
        id, idCompany, idLocator, idProperty, paymentPropertyCharge, voucher, type, description, value, deadline,
      });

  }
}

export { CreatePaymentPropertyChargesUseCase };