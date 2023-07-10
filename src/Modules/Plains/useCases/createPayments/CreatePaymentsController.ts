import { Request, Response } from "express";
import { mongo } from "mongoose";
import { collections } from "../../../../../services/database.service";
import { Gn } from "../../../../Gerencianet/gn";
import { EPaymentsType } from "../../models/Payments";

import { CreatePaymentsUseCase } from "./CreatePaymentsUseCase";

class CreatePaymentsController {
  constructor(private createPaymentsUseCase: CreatePaymentsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    try {
      const { 
        id, idPlain, idCompany, email, namePlain, value, period, type,invoice_link, voucher, aceptTerms, status
       } = req.body;
  
        console.log("Dados")
        console.log({ id, idPlain, idCompany, email, namePlain, value, period, type,invoice_link, voucher, aceptTerms, status})
       const findClient = await collections.company.findOne({id: idCompany});
       console.log("findClient")
       console.log(findClient)
  
       const valorNumber = parseInt(value?.replace(/[^0-9]/gi, ""));
       const cnpjFormat = findClient.cpf_Cnpj?.replace(/[^0-9]/gi, "")
       const phone = findClient.phone?.replace(/[^0-9]/gi, "");

       console.log("Document")
       console.log(findClient.cpf_Cnpj)
       console.log("Type")
       console.log(findClient.typeDocument)

       const Day = new Date().getDate() +5;
       const Month = new Date().getMonth() + 1;
       const Year = new Date().getFullYear();

       const MonthFormat = Month < 10 ? "0"+Month.toString():Month.toString()
       const DayFormat = Day < 10 ? "0"+Day.toString():Day.toString()
       console.log("Data")
       console.log(`${Year.toString()}-${MonthFormat.toString()}-${DayFormat.toString()}`)




       let customer = null;

        if ( findClient.typeDocument === "CPF" ) {
          customer = {
            name: findClient.socialReason,
            cpf: cnpjFormat,
            phone_number: phone,
          } 
        } else {
          customer = {
            juridical_person: {
              cnpj: cnpjFormat,
              corporate_name: findClient.fantasyName
            }
          }
        }



      const cobrancaGerada = await Gn.instance().criarBoleto({
        metadata: {
          custom_id: id,
          notification_url: 'https://sua-chave-api.herokuapp.com/gerencianet/web-hook/bolix?id=' + id,
        },
        items: [
          {
            name: "Plano" + namePlain,
            amount: 1,
            value: valorNumber
          }
        ],
  
        payment: {
          banking_billet: {
            expire_at: `${Year.toString()}-${MonthFormat.toString()}-${Day.toString()}`, // data de vencimento do boleto no padrão iso ano-mes-dia
            
            customer: customer,
            
            message: 'Efetue o pagamento para liberar o plano.'
          }
        }
        
       })

       
       console.log("customer")
       console.log(customer)
       
      const result = await this.createPaymentsUseCase.execute({
        id,idPlain, idCompany, email, namePlain, value, period, type: EPaymentsType.GN_BOLETO, invoice_link:cobrancaGerada.data.link, voucher: "", aceptTerms, status
      });
   
      const data = {
        id,
         idPlain,
         idCompany,
         email,
         namePlain,
         value,
         period,
         type: EPaymentsType.GN_BOLETO,
         invoice_link: cobrancaGerada.data.link,
         voucher: "",
         aceptTerms,
         status
      }

      return res.status(201).json(data).send();
    } catch( error ) {
      console.log(error);
      return res.status(500).send()
    }
  }
}

export { CreatePaymentsController };