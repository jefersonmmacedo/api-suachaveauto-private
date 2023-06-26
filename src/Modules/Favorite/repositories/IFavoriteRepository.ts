import { Favorite } from "../models/Favorite";

interface ICreateFavoriteDTO {
  id: string;
  idCompany: string;
  idAuto: string;
  idClient: string;
}

interface IFavoriteRepository {
  create({
    idCompany, idAuto, idClient
  }: ICreateFavoriteDTO): void;
  update({
   id, idCompany, idAuto, idClient
  }: ICreateFavoriteDTO): void;
  list();
  delete({id});
}

export { IFavoriteRepository, ICreateFavoriteDTO };
