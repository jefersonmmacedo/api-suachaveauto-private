import { ClientCompany } from "../../models/ClientCompany";
import { IClientCompanyRepository, IClientCompanyDTO } from "../IClientCompanyRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class ClientCompanyRepository implements IClientCompanyRepository {
  private clientCompany: ClientCompany[];

  private static INSTANCE: ClientCompanyRepository;

  private constructor() {
    this.clientCompany = [];
  }

  public static getInstance(): ClientCompanyRepository {
    if (!ClientCompanyRepository.INSTANCE) {
      ClientCompanyRepository.INSTANCE = new ClientCompanyRepository();
    }

    return ClientCompanyRepository.INSTANCE;
  }

 
  async findById(id: string): Promise<void>  {
    const findNickname = await collections.clientCompany.findOne({id})
    if(findNickname) {
      throw new Error("Nickname already exists!")
    } 
  }

  async create({idProcess, typeClient, idCompany, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
    number, district, city, uf, interest, type, subtype, cityPreference, ufPreference, attendance, }: IClientCompanyDTO) {
    const account: ClientCompany = new ClientCompany();
      const idMini = uuidv4()
      const id = idMini.substring(0,8)
      Object.assign(account, {
        id, _id: id, idProcess, typeClient, idCompany, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
        number, district, city, uf, interest, type, subtype, cityPreference, ufPreference, attendance, created_at: new Date(),
      });
      this.clientCompany.push(account);
      
      await collections.clientCompany.insertOne(account).then((result) => {
        //console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }



  list(){ }

  update({id, idProcess, typeClient, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
    number, district, city, uf, interest, type, subtype, cityPreference, ufPreference, attendance, }):void {}

  async delete({id}) {
    await collections.account.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { ClientCompanyRepository };




