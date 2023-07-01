import { ViewAuto } from "../../models/ViewAuto";
import { ICreateViewAutoDTO, IViewAutoRepository } from "../IViewAutoRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class ViewAutoRepository implements IViewAutoRepository {
  private viewAuto: ViewAuto[];

  private static INSTANCE: ViewAutoRepository;

  private constructor() {
    this.viewAuto = [];
  }

  public static getInstance(): ViewAutoRepository {
    if (!ViewAutoRepository.INSTANCE) {
      ViewAutoRepository.INSTANCE = new ViewAutoRepository();
    }

    return ViewAutoRepository.INSTANCE;
  }

 async create({
   idAuto, idClient, idCompany, origin, latitude, longitude, brand, model,
  }: ICreateViewAutoDTO) {
    const viewAuto: ViewAuto = new ViewAuto();
    const _id = uuidv4()
    Object.assign(viewAuto, {
      _id, id: _id,
     idAuto, idClient, idCompany, origin, latitude, longitude, brand, model,
      created_at: new Date()
    });

    this.viewAuto.push(viewAuto);
    console.log(viewAuto)
    await collections.viewAuto.insertOne(viewAuto).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ }){}

  async delete({id}) {
    await collections.viewAuto.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { ViewAutoRepository };
