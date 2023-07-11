import { Request, Response } from "express";
import { CreateCompanyUseCase } from "./CreateCompanyUseCase";

class CreateCompanyController {
  constructor(private createCompanyUseCase: CreateCompanyUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id,type, verified, status, typeDocument, cpf_Cnpj,nameSlug, socialReason, fantasyName, creci, email, phone, whatsapp, textWhatsapp, whatsapp2, textWhatsapp2, whatsapp3, textWhatsapp3, whatsapp4, textWhatsapp4,  password, responsibleName,
    emailResponsible, whatsappResponsible, logo, cep, road, number, district, city, uf,complement, reference, viewAddress, website, facebook,
    instagram, linkedin, youtube, aceptTerms, idComercialTeam, } = req.body;

    this.createCompanyUseCase.execute({
      id,type, verified, status, typeDocument, cpf_Cnpj,nameSlug, socialReason, fantasyName, creci, email, phone, whatsapp, textWhatsapp, whatsapp2, textWhatsapp2, whatsapp3, textWhatsapp3, whatsapp4, textWhatsapp4,  password, responsibleName,
    emailResponsible, whatsappResponsible, logo, cep, road, number, district, city, uf,complement, reference, viewAddress, website, facebook,
    instagram, linkedin, youtube, aceptTerms, idComercialTeam,
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateCompanyController };






