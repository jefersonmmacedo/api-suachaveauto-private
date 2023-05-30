import { Squad } from "../../models/Squad";
import { ISquadRepository, ISquadDTO } from "../ISquadRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class SquadRepository implements ISquadRepository {
  private squad: Squad[];

  private static INSTANCE: SquadRepository;

  private constructor() {
    this.squad = [];
  }

  public static getInstance(): SquadRepository {
    if (!SquadRepository.INSTANCE) {
      SquadRepository.INSTANCE = new SquadRepository();
    }

    return SquadRepository.INSTANCE;
  }

  async findByEmail(email: string): Promise<void> {
    const findEmail = await collections.squad.findOne({email})
      if(findEmail) {
        throw new Error("Email already exists!")
      } 
  }
  async findByCpf(cpf: string): Promise<void> {
    const findCpf = await collections.squad.findOne({cpf})
      if(findCpf) {
        throw new Error("Cpf already exists!")
      } 
  }

  async create({ avatar, name, fantasyName, rg, cpf, profession, birthday, register, email, phone, whatsapp, cep, road, number,
    district, city, uf, instagram, facebook, linkedin, bank, agency, typeAccount, account, typeKeyPix, keypix, password, }: ISquadDTO) {
    const Squads: Squad = new Squad();
      const idMini = uuidv4()
      const id = idMini.substring(0,8)
      Object.assign(Squads, {
        id, _id: id,  avatar, name, fantasyName, rg, cpf, profession, birthday, register, email, phone, whatsapp, cep, road, number,
        district, city, uf, instagram, facebook, linkedin, bank, agency, typeAccount, account, typeKeyPix, keypix, password, created_at: new Date(),
      });
      this.squad.push(Squads);
      
      await collections.squad.insertOne(Squads).then((result) => {
        //console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }

  list(){ }

  update({id,  avatar, name, fantasyName, rg, cpf, profession, birthday, register, email, phone, whatsapp, cep, road, number,
    district, city, uf, instagram, facebook, linkedin, bank, agency, typeAccount, account, typeKeyPix, keypix, password, }):void {}

    async session(email: string, username: string, password: string){
      return {
        email,
        username,
        password
      }
    }

  async delete({id}) {
    await collections.squad.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { SquadRepository };




