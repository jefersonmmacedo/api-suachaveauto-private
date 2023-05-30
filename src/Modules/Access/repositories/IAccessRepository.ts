import { Access } from "../models/Access";

interface ICreateAccessDTO {
  id: string;
  idCompany: string;
  idTeam: string;
  device: string;
  browser: string;
  latitude: string;
  longitude: string;
  ipDevice: string;
}

 interface IAccessRepository {
  create({
   idCompany, idTeam, device, browser, latitude, longitude, ipDevice,
  }: ICreateAccessDTO): void;
  update({
   id, idCompany, idTeam, device, browser, latitude, longitude, ipDevice,
  }: ICreateAccessDTO): void;
  list();
  delete({id});
}

export { IAccessRepository, ICreateAccessDTO };
