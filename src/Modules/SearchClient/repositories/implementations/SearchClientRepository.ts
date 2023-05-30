import { SearchClient } from "../../models/SearchClient";
import { ICreateSearchClientDTO, ISearchClientRepository } from "../ISearchClientRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class SearchClientRepository implements ISearchClientRepository {
  private searchClient: SearchClient[];

  private static INSTANCE: SearchClientRepository;

  private constructor() {
    this.searchClient = [];
  }

  public static getInstance(): SearchClientRepository {
    if (!SearchClientRepository.INSTANCE) {
      SearchClientRepository.INSTANCE = new SearchClientRepository();
    }

    return SearchClientRepository.INSTANCE;
  }

  async create({
    email, name, whatsapp, district, city, uf, status, pets, furnished, type, subType, bedroom, suite, restroom, garage,
  }: ICreateSearchClientDTO) {
    const Search: SearchClient = new SearchClient();
    const _id = uuidv4()
    Object.assign(Search, {
      _id, id: _id,
      email, name, whatsapp, district, city, uf, status, pets, furnished, type, subType, bedroom, suite, restroom, garage,
      created_at: new Date()
    });

    this.searchClient.push(Search);
    console.log(SearchClient)
    await collections.searchClient.insertOne(Search).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ id, email, name, whatsapp, district, city, uf, status, pets, furnished, type, subType, bedroom, suite, restroom, garage,}){}

  async delete({id}) {
    await collections.searchClient.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { SearchClientRepository };
