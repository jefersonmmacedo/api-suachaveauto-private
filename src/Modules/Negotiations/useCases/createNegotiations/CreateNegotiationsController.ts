import { Request, Response } from "express";
import { CreateNegotiationsUseCase } from "./CreateNegotiationsUseCase";

class CreateNegotiationsController {
  constructor(private createNegotiationsUseCase: CreateNegotiationsUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id,idCompany, idTeam, idClient, nameClient, cpfClient, idProperty, typeNegotiation, status, deadline, parcel, valueProperty, amountofCharges, valueTotal, typeOfInsurance} = req.body;

    this.createNegotiationsUseCase.execute({
      id, idCompany, idTeam, idClient, nameClient, cpfClient, idProperty, typeNegotiation, status, deadline, parcel, valueProperty, amountofCharges, valueTotal, typeOfInsurance
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateNegotiationsController };






