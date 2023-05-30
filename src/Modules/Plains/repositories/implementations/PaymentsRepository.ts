import { collections } from "../../../../../services/database.service";
import { Payments } from "../../models/Payments";
import { IPaymentsDTO, IPaymentsRepository } from "../IPaymentsRepository";
import {v4 as uuidv4} from 'uuid'

class PaymentsRepository implements IPaymentsRepository {
  private payments: Payments[];

  private static INSTANCE: PaymentsRepository;

  private constructor() {
    this.payments = [];
  }

  public static getInstance(): PaymentsRepository {
    if (!PaymentsRepository.INSTANCE) {
      PaymentsRepository.INSTANCE = new PaymentsRepository();
    }

    return PaymentsRepository.INSTANCE;
  }

  async create({ id, idPlain, idCompany, email, namePlain, value, period, type, invoice_link, voucher, aceptTerms, status }: IPaymentsDTO) {
    const payment: Payments = new Payments();
     Object.assign(payment, {
      id, _id: id, idPlain, idCompany, email, namePlain, value, period, type, invoice_link, voucher, aceptTerms, status, created_at: new Date(),
    });

    this.payments.push(payment);

    await collections.payments.insertOne(payment).then((result) => {

    }).catch(error => {
      console.log(error)
    })
  }

  list(){}

  async delete({id}) {
    await collections.payments.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  async update({id, idPlain, idCompany, email, namePlain, value, period, type, invoice_link, voucher, aceptTerms, status}): Promise<void> {}
}

export { PaymentsRepository };
