import { Negotiations } from "../../models/Negotiations";
import { INegotiationsRepository, INegotiationsDTO } from "../INegotiationsRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class NegotiationsRepository implements INegotiationsRepository {
  private negotiations: Negotiations[];

  private static INSTANCE: NegotiationsRepository;

  private constructor() {
    this.negotiations = [];
  }

  public static getInstance(): NegotiationsRepository {
    if (!NegotiationsRepository.INSTANCE) {
      NegotiationsRepository.INSTANCE = new NegotiationsRepository();
    }

    return NegotiationsRepository.INSTANCE;
  }


  async create({idCompany, idTeam, idClient, nameClient, cpfClient, idProperty, typeNegotiation, status, deadline, parcel, valueProperty, amountofCharges, valueTotal, typeOfInsurance}: INegotiationsDTO) {
    const negotiation: Negotiations = new Negotiations();
      const idMini = uuidv4()
      const id = idMini.substring(0,8)
      Object.assign(negotiation, {
        id, _id: id, idCompany, idTeam, idClient, nameClient, cpfClient, idProperty, typeNegotiation, status, deadline, parcel, valueProperty, amountofCharges, valueTotal, typeOfInsurance, created_at: new Date(),
      });
      this.negotiations.push(negotiation);
      
      await collections.negotiations.insertOne(negotiation).then((result) => {
        //console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }

  list(){ }

  update({id, idCompany, idTeam, idClient, nameClient, cpfClient, idProperty, typeNegotiation, status, deadline, parcel, valueProperty, amountofCharges, valueTotal, typeOfInsurance}):void {}

  async delete({id}) {
    await collections.negotiations.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { NegotiationsRepository };




