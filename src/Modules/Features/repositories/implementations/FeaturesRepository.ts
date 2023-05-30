import { collections } from "../../../../../services/database.service";
import { Features } from "../../models/Features";
import { ICreateFeaturesDTO, IFeaturesRepository } from "../IFeaturesRepository";

import { v4 as uuidv4 } from 'uuid'

class FeaturesRepository implements IFeaturesRepository {
  private features: Features[];

  private static INSTANCE: FeaturesRepository;

  private constructor() {
    this.features = [];
  }

  public static getInstance(): FeaturesRepository {
    if (!FeaturesRepository.INSTANCE) {
      FeaturesRepository.INSTANCE = new FeaturesRepository();
    }

    return FeaturesRepository.INSTANCE;
  }

 async create({
  feature
  }: ICreateFeaturesDTO) {
    const features: Features = new Features();
    const _id = uuidv4()
    Object.assign(features, {
      _id, id: _id,
      feature,
      created_at: new Date()
    });

    this.features.push(features);
    console.log(features)
    await collections.features.insertOne(features).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ }){}

  async delete({id}) {
    await collections.features.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { FeaturesRepository };
