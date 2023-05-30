import { Plains } from "../../models/Plains";
import { IPlainsDTO, IPlainsRepository } from "../IPlainsRepository";
import {v4 as uuidv4} from 'uuid'
import { collections } from "../../../../../services/database.service";

class PlainsRepository implements IPlainsRepository {
  private plains: Plains[];

  private static INSTANCE: PlainsRepository;

  private constructor() {
    this.plains = [];
  }

  public static getInstance(): PlainsRepository {
    if (!PlainsRepository.INSTANCE) {
      PlainsRepository.INSTANCE = new PlainsRepository();
    }

    return PlainsRepository.INSTANCE;
  }

 async create({ name, value, valueNew, status, period, infos, note, emphasis, users, }: IPlainsDTO) {
    const plain: Plains = new Plains();
    const _id = uuidv4()
    Object.assign(plain, {
      _id, id: _id, name, value, valueNew, status, period, infos, note, emphasis, users, created_at: new Date(),
    });

    this.plains.push(plain);

    await collections.plains.insertOne(plain).then((result) => {

    })
  }
  list(): Plains[] {
    return this.plains;
  }

  async delete({id}) {
    await collections.plains.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  async update({name, value, valueNew, status, period, infos, note, emphasis, users,}): Promise<void> {}
}


export { PlainsRepository };
