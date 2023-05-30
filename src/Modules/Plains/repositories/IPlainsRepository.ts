import { Plains } from "../models/Plains";

interface IPlainsDTO {
  id: string;
  name: string;
  value: string;
  valueNew: string;
  status: string;
  period: number;
  infos: object;
  note: string;
  emphasis: string;
  users: string;
}

 
 
interface IPlainsRepository {
  create({ id, name, value, valueNew, status, period, infos, note, emphasis, users, }: IPlainsDTO): Promise<void>;
  update({id, name, value, valueNew, status, period, infos, note, emphasis, users, }): Promise<void>
  list();
  delete({id});
}

export { IPlainsRepository, IPlainsDTO };
