import { DeletedClient } from "../../models/DeletedClient";
import { ICreateDeletedClientDTO, IDeletedClientRepository } from "../IDeletedClientRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class DeletedClientRepository implements IDeletedClientRepository {
  private DeletedClient: DeletedClient[];

  private static INSTANCE: DeletedClientRepository;

  private constructor() {
    this.DeletedClient = [];
  }

  public static getInstance(): DeletedClientRepository {
    if (!DeletedClientRepository.INSTANCE) {
      DeletedClientRepository.INSTANCE = new DeletedClientRepository();
    }

    return DeletedClientRepository.INSTANCE;
  }

 async create({
  idClient, Reason, description, favorites, messages, schedule,
  }: ICreateDeletedClientDTO) {
    const Client: DeletedClient = new DeletedClient();
    const _id = uuidv4()
    Object.assign(Client, {
      _id, id: _id,
      idClient, Reason, description, favorites, messages, schedule,
      created_at: new Date()
    });

    this.DeletedClient.push(Client);
    console.log(DeletedClient)
    await collections.deletedClient.insertOne(DeletedClient).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ }){}

  async delete({id}) {
    await collections.deletedClient.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { DeletedClientRepository };
