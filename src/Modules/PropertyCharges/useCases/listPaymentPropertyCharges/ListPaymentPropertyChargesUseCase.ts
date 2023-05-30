import { collections } from "../../../../../services/database.service";
import { PaymentPropertyCharges } from "../../models/PaymentPropertyCharges";
import { IPaymentPropertyChargesRepository } from "../../repositories/IPaymentPropertyChargesRepository";

class ListPaymentPropertyChargesUseCase {
  constructor(private PaymentPropertyChargesRepository: IPaymentPropertyChargesRepository) {
    " ";
  }

  async execute() {
   const PaymentPropertyCharges = await collections.paymentCharges.find({});
   const PaymentPropertyChargesAll = PaymentPropertyCharges.toArray(function(err, result){
   // console.log(result)
    return result;
   })
console.log(PaymentPropertyChargesAll)
        }
  }

export { ListPaymentPropertyChargesUseCase };
