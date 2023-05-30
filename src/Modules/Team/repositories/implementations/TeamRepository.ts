import { Team } from "../../models/Team";
import { ITeamRepository, ITeamDTO } from "../ITeamRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class TeamRepository implements ITeamRepository {
  private team: Team[];

  private static INSTANCE: TeamRepository;

  private constructor() {
    this.team = [];
  }

  public static getInstance(): TeamRepository {
    if (!TeamRepository.INSTANCE) {
      TeamRepository.INSTANCE = new TeamRepository();
    }

    return TeamRepository.INSTANCE;
  }

  async findByEmail(email: string): Promise<void> {
    const findEmail = await collections.team.findOne({email})
      if(findEmail) {
        throw new Error("Email already exists!")
      } 
  }
  async findByCpf(cpf: string): Promise<void> {
    const findCpf = await collections.team.findOne({cpf})
      if(findCpf) {
        throw new Error("Cpf already exists!")
      } 
  }

  async create({idCompany, avatar, type, name, fantasyName, rg, cpf, birthday, creci,
    email, phone, whatsapp, road, number, district, city, uf,
    instagram, facebook, linkedin, twitter,
    bank, agency, typeAccount, account, typeKeyPix, keypix, password, }: ITeamDTO) {
    const team: Team = new Team();
      const idMini = uuidv4()
      const id = idMini.substring(0,8)
      Object.assign(team, {
        id, _id: id, idCompany, avatar, type, name, fantasyName, rg, cpf, birthday, creci,
        email, phone, whatsapp, road, number, district, city, uf,
        instagram, facebook, linkedin, twitter,
        bank, agency, typeAccount, account, typeKeyPix, keypix, password, created_at: new Date(),
      });
      this.team.push(team);
      
      await collections.team.insertOne(team).then((result) => {
        //console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }

  list(){ }

  update({id, idCompany, avatar, type, name, fantasyName, rg, cpf, birthday, creci,
    email, phone, whatsapp, road, number, district, city, uf,
    instagram, facebook, linkedin, twitter,
    bank, agency, typeAccount, account, typeKeyPix, keypix, password, }):void {}

    async session(email: string, username: string, password: string){
      return {
        email,
        username,
        password
      }
    }

  async delete({id}) {
    await collections.team.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { TeamRepository };




