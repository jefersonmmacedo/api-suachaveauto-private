import { PaymentPropertyCharges } from "../../models/PaymentPropertyCharges";
import { IPaymentPropertyChargesRepository, IPaymentPropertyChargesDTO } from "../IPaymentPropertyChargesRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class PaymentPropertyChargesRepository implements IPaymentPropertyChargesRepository {
  private paymentPropertyCharges: PaymentPropertyCharges[];

  private static INSTANCE: PaymentPropertyChargesRepository;

  private constructor() {
    this.paymentPropertyCharges = [];
  }

  public static getInstance(): PaymentPropertyChargesRepository {
    if (!PaymentPropertyChargesRepository.INSTANCE) {
      PaymentPropertyChargesRepository.INSTANCE = new PaymentPropertyChargesRepository();
    }

    return PaymentPropertyChargesRepository.INSTANCE;
  }
  
  async findById(id: string): Promise<void>  {
    const findNickname = await collections.paymentCharges.findOne({id})
    if(findNickname) {
      throw new Error("Nickname already exists!")
    } 
  }

  async create({idCompany, idLocator, idProperty, paymentPropertyCharge, voucher, type, description, value, deadline, }: IPaymentPropertyChargesDTO) {
    const paymentPropertyCharges: PaymentPropertyCharges = new PaymentPropertyCharges();
      const idMini = uuidv4()
      const id = idMini.substring(0,8)
      Object.assign(PaymentPropertyCharges, {
        id, _id: id, idCompany, idLocator, idProperty, paymentPropertyCharge, voucher, type, description, value, deadline, created_at: new Date(),
      });
      this.paymentPropertyCharges.push(paymentPropertyCharges);
      
      await collections.paymentCharges.insertOne(paymentPropertyCharges).then((result) => {
        //console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }

  list(){ }

  update({id, idCompany, idLocator, idProperty, paymentPropertyCharge, voucher, type, description, value, deadline, }):void {}

  async delete({id}) {
    await collections.paymentCharges.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { PaymentPropertyChargesRepository };




