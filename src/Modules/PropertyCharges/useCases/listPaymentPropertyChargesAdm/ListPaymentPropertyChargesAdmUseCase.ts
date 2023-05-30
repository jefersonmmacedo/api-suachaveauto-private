import { collections } from "../../../../../services/database.service";
import { PaymentPropertyCharges } from "../../models/PaymentPropertyCharges";
import { IPaymentPropertyChargesRepository } from "../../repositories/IPaymentPropertyChargesRepository";

class ListPaymentPropertyChargesAdmUseCase {
  constructor(private PaymentPropertyChargesAdmRepository: IPaymentPropertyChargesRepository) {
    " ";
  }

  async execute() {
   const PaymentPropertyChargesAdm = await collections.paymentCharges.find({});
   const PaymentPropertyChargesAdmAll = PaymentPropertyChargesAdm.toArray(function(err, result){
    console.log(result)
    return result;
   })
  //console.log(PaymentPropertyChargesAdmAll)
        }
  }

export { ListPaymentPropertyChargesAdmUseCase };
