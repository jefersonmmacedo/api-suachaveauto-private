import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPropertyIntegrationUseCase } from "./ListPropertyIntegrationUseCase";

class ListPropertyIntegrationController {
  constructor(private ListPropertyIntegrationUseCase: ListPropertyIntegrationUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idCompany = req.params;
   await collections.property.find(idCompany).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {


        let list = []

        result.forEach((property) => {
          async function RoomsAndLastDate() {   
            let fotos = []
            property.images.forEach((imagem) => {
              async function loadingImages() {            
                  const fotosPropery = {
                      descricao: `Imagem do ${property.title}`,
                      datahoraalteracao: `${new Date().getDate()}/${new Date().getMonth() +1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
                      url: imagem.link          
                  }                 
                  fotos.push(fotosPropery)
              }

              loadingImages()

         })

              const dados = {
                codigo: property.id, /* Código interno do imóvel (Número ou Texto) */
                nomecondominio: "", /* Nome do condomínio ou vazio */
                finalidade: property.status === "Alguel" ? 1 : 2, /* 1 = Aluguel, 2 = Venda */
                destinacao: property.subType, /* Residencial ou Comercial */
                tipo: property.type, /* Categoria padrao VRSync */
                valor: property.status === "Aluguel" ? property.priceRent : property.priceSale, /* Valor do imóvel (Venda ou Locação) */
                valorcondominio: property.condominium, /* Valor do condomínio */
                valoriptu: property.iptu, /* Valor do IPTU */
                bairro: property.district, /* Bairro do imóvel */
                cidade: property.city, /* Cidade do imóvel */
                estado: property.uf, /* Estado do imóvel */
                cep: property.cep, /* CEP do imóvel */
                endereco: property.road, /* Endereço do imóvel */
                numero: property.number, /* Número do imóvel */
                complemento: property.complement, /* Complemento do imóvel */
                aceitafinanciamento: property.financing === "Sim" ? true : false, /* Aceita financiamento (true or false) */
                aceitapermuta: false, /* Aceita permuta (true or false) */
                numeroquartos: property.bedroom, /* Número de quartos */
                numerobanhos: property.restroom, /* Número de banheiros */
                numerovagas: property.garage, /* Número de vagas */
                numerosuites: property.suite, /* Número de suítes */
              areaprincipal: property.buildingArea !== "" ? `${property.buildingArea},00` : "", /* Área do imóvel */
                latitude: "", /* Latitude e Longitude do imóvel */
                longitude: "", /* Latitude e Longitude do imóvel */
                descricao: property.description, /* Descrição do imóvel (Máximo 3000 caracteres) */
                portaria24horas: false, /* Portaria 24 horas (true or false) */
                piscina: false, /* Piscina (true or false) */
                playground: false, /* Playground (true or false) */      
                datahoraultimaalteracao: "29/11/2019 16:50:28", /* Data e hora da última alteração do imóvel */      
                urlvideo: property.video, /* URL do vídeo do imóvel */
                fotos: fotos
              } 

              list.push(dados)

          }

          RoomsAndLastDate()

     })

     res.status(200).json(list)


      }
      return result;
     })
  }
}

export { ListPropertyIntegrationController };
