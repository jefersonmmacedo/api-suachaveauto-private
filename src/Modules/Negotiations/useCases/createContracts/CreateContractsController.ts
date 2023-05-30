import { Request, Response } from "express";
import { CreateContractsUseCase } from "./CreateContractsUseCase";

class CreateContractsController {
  constructor(private createContractsUseCase: CreateContractsUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id, idProperty, title, idCompany, idLocator, nameLocator, cpfCnpjLocator, idClient, nameClient, cpfCnpjClient,emailClient, phoneClient, whatsappClient, idGuarantor,
      nameGuarantor, cpfCnpjGuarantor, type, subType, assurance, securityDeposit, typeNegotiation, newContract, status,
      startContract, endContract, parcels, maturityContract, valueContract, condominium, iptu, otherPrices, adjustment,
      readjustedRentDate, transfer, transferAmount, proportionalRent, daysProportional, firstProportionalInstallment, fireInsurance, valueFireInsurance,
      readjustmentIndex, fireInsuranceExpiration,} = req.body;

    this.createContractsUseCase.execute({
      id, idProperty, title, idCompany, idLocator, nameLocator, cpfCnpjLocator, idClient, nameClient, cpfCnpjClient, emailClient, phoneClient, whatsappClient,idGuarantor,
      nameGuarantor, cpfCnpjGuarantor, type, subType, assurance, securityDeposit, typeNegotiation, newContract, status,
      startContract, endContract, parcels, maturityContract, valueContract, condominium, iptu, otherPrices, adjustment,
      readjustedRentDate, transfer, transferAmount, proportionalRent, daysProportional, firstProportionalInstallment, fireInsurance, valueFireInsurance,
      readjustmentIndex, fireInsuranceExpiration,
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateContractsController };






