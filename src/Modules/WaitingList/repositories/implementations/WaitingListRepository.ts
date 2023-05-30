import { WaitingList } from "../../models/WaitingList";
import { ICreateWaitingListDTO, IWaitingListRepository } from "../IWaitingListRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class WaitingListRepository implements IWaitingListRepository {
  private waitingList: WaitingList[];

  private static INSTANCE: WaitingListRepository;

  private constructor() {
    this.waitingList = [];
  }

  public static getInstance(): WaitingListRepository {
    if (!WaitingListRepository.INSTANCE) {
      WaitingListRepository.INSTANCE = new WaitingListRepository();
    }

    return WaitingListRepository.INSTANCE;
  }

  async create({
    type, nameFantasy, whatsapp, email, cep, city, uf,
  }: ICreateWaitingListDTO) {
    const waitingList: WaitingList = new WaitingList();
    const _id = uuidv4()
    Object.assign(waitingList, {
      _id, id: _id,
      type, nameFantasy, whatsapp, email, cep, city, uf,
      created_at: new Date()
    });

    this.waitingList.push(waitingList);
    console.log(WaitingList)
    await collections.waitingList.insertOne(waitingList).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ id, type, nameFantasy, whatsapp, email, cep, city, uf,}){}

  async delete({id}) {
    await collections.waitingList.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { WaitingListRepository };
