import { AlertClient } from "../../models/AlertClient";
import { ICreateAlertClientDTO, IAlertClientRepository } from "../IAlertClientRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class AlertClientRepository implements IAlertClientRepository {
  private alertClient: AlertClient[];

  private static INSTANCE: AlertClientRepository;

  private constructor() {
    this.alertClient = [];
  }

  public static getInstance(): AlertClientRepository {
    if (!AlertClientRepository.INSTANCE) {
      AlertClientRepository.INSTANCE = new AlertClientRepository();
    }

    return AlertClientRepository.INSTANCE;
  }

  async create({
    idAuto, email, name, whatsapp,  city, uf, status, pets, furnished, type, subType, bedroom, suite, restroom, garage,
  }: ICreateAlertClientDTO) {
    const alert: AlertClient = new AlertClient();
    const _id = uuidv4()
    Object.assign(alert, {
      _id, id: _id,
      idAuto, email, name, whatsapp,  city, uf, status, pets, furnished, type, subType, bedroom, suite, restroom, garage,
      created_at: new Date()
    });

    this.alertClient.push(alert);
    console.log(AlertClient)
    await collections.alertClient.insertOne(alert).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ id, idAuto, email, name, whatsapp,  city, uf, status, pets, furnished, type, subType, bedroom, suite, restroom, garage,}){}

  async delete({id}) {
    await collections.alertClient.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { AlertClientRepository };
