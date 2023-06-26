import { collections } from "../../../../../services/database.service";
import { Licensing } from "../../models/Licensing";
import { ICreateLicensingDTO, ILicensingRepository } from "../ILicensingRepository";

import { v4 as uuidv4 } from 'uuid'

class LicensingRepository implements ILicensingRepository {
  private licensing: Licensing[];

  private static INSTANCE: LicensingRepository;

  private constructor() {
    this.licensing = [];
  }

  public static getInstance(): LicensingRepository {
    if (!LicensingRepository.INSTANCE) {
      LicensingRepository.INSTANCE = new LicensingRepository();
    }

    return LicensingRepository.INSTANCE;
  }

 async create({
  licensing
  }: ICreateLicensingDTO) {
    const licensings: Licensing = new Licensing();
    const _id = uuidv4()
    Object.assign(licensings, {
      _id, id: _id,
      licensing,
      created_at: new Date()
    });

    this.licensing.push(licensings);
    console.log(Licensing)
    await collections.licensing.insertOne(licensings).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ }){}

  async delete({id}) {
    await collections.licensing.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { LicensingRepository };
