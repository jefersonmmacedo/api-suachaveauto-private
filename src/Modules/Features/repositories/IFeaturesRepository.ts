import { Features } from "../models/Features";

interface ICreateFeaturesDTO {
  id: string;
  feature: string;
}


interface IFeaturesRepository {
  create({
   feature
  }: ICreateFeaturesDTO): void;
  update({
   id, feature
  }: ICreateFeaturesDTO): void;
  list();
  delete({id});
}

export { IFeaturesRepository, ICreateFeaturesDTO };
