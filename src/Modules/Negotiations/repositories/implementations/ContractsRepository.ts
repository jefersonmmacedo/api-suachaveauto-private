import { Contracts } from "../../models/Contracts";
import { IContractsRepository, IContractsDTO } from "../IContractsRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class ContractsRepository implements IContractsRepository {
  private contracts: Contracts[];

  private static INSTANCE: ContractsRepository;

  private constructor() {
    this.contracts = [];
  }

  public static getInstance(): ContractsRepository {
    if (!ContractsRepository.INSTANCE) {
      ContractsRepository.INSTANCE = new ContractsRepository();
    }

    return ContractsRepository.INSTANCE;
  }


  async create({idAuto, title, idCompany, idLocator, nameLocator, cpfCnpjLocator, idClient, nameClient, cpfCnpjClient, emailClient, phoneClient, whatsappClient, idGuarantor,
    nameGuarantor, cpfCnpjGuarantor, type, subType, assurance, securityDeposit, typeNegotiation, newContract, status,
    startContract, endContract, parcels, maturityContract, valueContract, condominium, iptu, otherPrices, adjustment,
    readjustedRentDate, transfer, transferAmount, proportionalRent, daysProportional, firstProportionalInstallment, fireInsurance, valueFireInsurance,
    readjustmentIndex, fireInsuranceExpiration,}: IContractsDTO) {
    const contracts: Contracts = new Contracts();
      const idMini = uuidv4()
      const id = idMini.substring(0,8)
      Object.assign(contracts, {
        id, _id: id, idAuto, title, idCompany, idLocator, nameLocator, cpfCnpjLocator, idClient, nameClient, cpfCnpjClient, emailClient, phoneClient, whatsappClient, idGuarantor,
        nameGuarantor, cpfCnpjGuarantor, type, subType, assurance, securityDeposit, typeNegotiation, newContract, status,
        startContract, endContract, parcels, maturityContract, valueContract, condominium, iptu, otherPrices, adjustment,
        readjustedRentDate, transfer, transferAmount, proportionalRent, daysProportional, firstProportionalInstallment, fireInsurance, valueFireInsurance,
        readjustmentIndex, fireInsuranceExpiration, created_at: new Date(),
      });
      this.contracts.push(contracts);
      
      await collections.contracts.insertOne(contracts).then((result) => {
        //console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }


  list(){ }

  update({id, idAuto, title, idCompany, idLocator, nameLocator, cpfCnpjLocator, idClient, nameClient, cpfCnpjClient, emailClient, phoneClient, whatsappClient, idGuarantor,
    nameGuarantor, cpfCnpjGuarantor, type, subType, assurance, securityDeposit, typeNegotiation, newContract, status,
    startContract, endContract, parcels, maturityContract, valueContract, condominium, otherPrices, adjustment,
    readjustedRentDate, transfer, transferAmount, proportionalRent, daysProportional, firstProportionalInstallment, fireInsurance, valueFireInsurance,
    readjustmentIndex, fireInsuranceExpiration,}):void {}

  async delete({id}) {
    await collections.contracts.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { ContractsRepository };




