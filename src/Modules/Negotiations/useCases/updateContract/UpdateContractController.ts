import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateContractUseCase } from "./UpdateContractUseCase";

class UpdateContractController {
  constructor(private UpdateContractUseCase: UpdateContractUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {
      idProperty, title, idCompany, idLocator, nameLocator, cpfCnpjLocator, idClient, nameClient, cpfCnpjClient,emailClient, phoneClient, whatsappClient, idGuarantor,
      nameGuarantor, cpfCnpjGuarantor, type, subType, assurance, securityDeposit, typeNegotiation, newContract, status,
      startContract, endContract, parcels, maturityContract, valueContract, condominium, iptu, otherPrices, adjustment,
      readjustedRentDate, transfer, transferAmount, proportionalRent, daysProportional, firstProportionalInstallment, fireInsurance, valueFireInsurance,
      readjustmentIndex, fireInsuranceExpiration,
    } = req.body;
    const id = req.params; 


    await collections.contracts.findOneAndUpdate(id, {$set:{ 
      idProperty, title, idCompany, idLocator, nameLocator, cpfCnpjLocator, idClient, nameClient, cpfCnpjClient,emailClient, phoneClient, whatsappClient, idGuarantor,
    nameGuarantor, cpfCnpjGuarantor, type, subType, assurance, securityDeposit, typeNegotiation, newContract, status,
    startContract, endContract, parcels, maturityContract, valueContract, condominium, iptu, otherPrices, adjustment,
    readjustedRentDate, transfer, transferAmount, proportionalRent, daysProportional, firstProportionalInstallment, fireInsurance, valueFireInsurance,
    readjustmentIndex, fireInsuranceExpiration,
    }}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
     console.log(error);
      return res.status(500)
    })

  }
}

export { UpdateContractController };
