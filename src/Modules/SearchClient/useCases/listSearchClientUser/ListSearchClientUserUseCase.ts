import { collections } from "../../../../../services/database.service";
import { SearchClient } from "../../models/SearchClient";
import { ISearchClientRepository } from "../../repositories/ISearchClientRepository";

class ListSearchClientUserUseCase {
  constructor(private SearchClientRepository: ISearchClientRepository) {
    " ";
  }

  async execute() {
   const SearchClient = await collections.searchClient.find({});
   const SearchClientAll = SearchClient.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(SearchClientAll)
        }
  }

export { ListSearchClientUserUseCase };
