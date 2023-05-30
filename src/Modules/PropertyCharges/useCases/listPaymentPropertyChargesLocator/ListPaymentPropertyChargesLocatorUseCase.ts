import { collections } from "../../../../../services/database.service";
import { PaymentPropertyCharges } from "../../models/PaymentPropertyCharges";
import { IPaymentPropertyChargesRepository } from "../../repositories/IPaymentPropertyChargesRepository";

class ListPaymentPropertyChargesLocatorUseCase {
  constructor(private PaymentPropertyChargesRepository: IPaymentPropertyChargesRepository) {
    " ";
  }

  async execute() {
   const PaymentPropertyCharges = await collections.paymentCharges.find({});
   const PaymentPropertyChargesAll = PaymentPropertyCharges.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(PaymentPropertyChargesAll)
        }
  }

export { ListPaymentPropertyChargesLocatorUseCase };
