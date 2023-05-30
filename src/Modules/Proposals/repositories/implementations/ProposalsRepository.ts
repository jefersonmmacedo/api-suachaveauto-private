import { Proposals } from "../../models/Proposals";
import { ICreateProposalsDTO, IProposalsRepository } from "../IProposalsRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class ProposalsRepository implements IProposalsRepository {
  private proposals: Proposals[];

  private static INSTANCE: ProposalsRepository;

  private constructor() {
    this.proposals = [];
  }

  public static getInstance(): ProposalsRepository {
    if (!ProposalsRepository.INSTANCE) {
      ProposalsRepository.INSTANCE = new ProposalsRepository();
    }

    return ProposalsRepository.INSTANCE;
  }

 async create({
   typeProposal, idCompany, idProperty, title, type, subType, condominium, iptu, otherPrices, 
   idClient, nameClient, cpfCnpjClient, email, phone, whatsapp,
  status, valueProperty, formOfpayment, expirationDate, contactReminder, 
  }: ICreateProposalsDTO) {
    const proposal: Proposals = new Proposals();
    const _id = uuidv4()
    Object.assign(Proposals, {
      _id, id: _id,
      typeProposal, idCompany, idProperty, title, type, subType, condominium, iptu, otherPrices, 
      idClient, nameClient, cpfCnpjClient, email, phone, whatsapp,
status, valueProperty, formOfpayment, expirationDate, contactReminder, 
      created_at: new Date()
    });

    this.proposals.push(proposal);
    console.log(proposal)
    await collections.proposals.insertOne(proposal).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ }){}

  async delete({id}) {
    await collections.proposals.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { ProposalsRepository };
