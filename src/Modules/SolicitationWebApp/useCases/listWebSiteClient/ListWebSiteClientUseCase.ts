import { collections } from "../../../../../services/database.service";
import { WebSiteClient } from "../../models/WebSiteClient";
import { IWebSiteClientRepository } from "../../repositories/IWebSiteClientRepository";

class ListWebSiteClientUseCase {
  constructor(private WebSiteClientRepository: IWebSiteClientRepository) {
    " ";
  }

  async execute() {
   const WebSiteClient = await collections.webSiteClient.find({});
   const WebSiteClientAll = WebSiteClient.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(WebSiteClientAll)
        }
  }

export { ListWebSiteClientUseCase };
