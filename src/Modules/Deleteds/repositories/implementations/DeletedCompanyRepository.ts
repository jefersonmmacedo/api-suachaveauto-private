import { DeletedCompany } from "../../models/DeletedCompany";
import { ICreateDeletedCompanyDTO, IDeletedCompanyRepository } from "../IDeletedCompanyRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class DeletedCompanyRepository implements IDeletedCompanyRepository {
  private deletedCompany: DeletedCompany[];

  private static INSTANCE: DeletedCompanyRepository;

  private constructor() {
    this.deletedCompany = [];
  }

  public static getInstance(): DeletedCompanyRepository {
    if (!DeletedCompanyRepository.INSTANCE) {
      DeletedCompanyRepository.INSTANCE = new DeletedCompanyRepository();
    }

    return DeletedCompanyRepository.INSTANCE;
  }

 async create({
  idCompany, reason, description, properties, messages, leads, contracts, financers, charges, schedules,
clients, locators, guarantors, initialDate, lastPlan, lastPayment, reconciliation, resultReconciliation, 
  }: ICreateDeletedCompanyDTO) {
    const Company: DeletedCompany = new DeletedCompany();
    const _id = uuidv4()
    Object.assign(Company, {
      _id, id: _id,
      idCompany, reason, description, properties, messages, leads, contracts, financers, charges, schedules,
clients, locators, guarantors, initialDate, lastPlan, lastPayment, reconciliation, resultReconciliation, 
      created_at: new Date()
    });

    this.deletedCompany.push(Company);
    console.log(DeletedCompany)
    await collections.deletedCompany.insertOne(Company).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({
    id, idCompany, reason, description, properties, messages, leads, contracts, financers, charges, schedules,
clients, locators, guarantors, initialDate, lastPlan, lastPayment, reconciliation, resultReconciliation, 
  }){}

  async delete({id}) {
    await collections.deletedCompany.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { DeletedCompanyRepository };
