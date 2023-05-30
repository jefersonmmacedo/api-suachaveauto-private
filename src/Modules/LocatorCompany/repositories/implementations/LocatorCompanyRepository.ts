import { LocatorCompany } from "../../models/LocatorCompany";
import { ILocatorCompanyRepository, ILocatorCompanyDTO } from "../ILocatorCompanyRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class LocatorCompanyRepository implements ILocatorCompanyRepository {
  private locatorCompany: LocatorCompany[];

  private static INSTANCE: LocatorCompanyRepository;

  private constructor() {
    this.locatorCompany = [];
  }

  public static getInstance(): LocatorCompanyRepository {
    if (!LocatorCompanyRepository.INSTANCE) {
      LocatorCompanyRepository.INSTANCE = new LocatorCompanyRepository();
    }

    return LocatorCompanyRepository.INSTANCE;
  }

  // async findByEmail(email: string): Promise<void> {
  //   const findEmail = await collections.locatorCompany.findOne({email})
  //     if(findEmail) {
  //       throw new Error("Email already exists!")
  //     } 
  // }
  
  
  async findById(id: string): Promise<void>  {
    const findNickname = await collections.locatorCompany.findOne({id})
    if(findNickname) {
      throw new Error("Nickname already exists!")
    } 
  }

  async create({idCompany, name, fantasyName, rg, cpf_Cnpj, birthday, email, phone, whatsapp, cep, road, number, district, city, uf, }: ILocatorCompanyDTO) {
    const locatorCompany: LocatorCompany = new LocatorCompany();
      const idMini = uuidv4()
      const id = idMini.substring(0,8)
      Object.assign(locatorCompany, {
        id, _id: id, idCompany, name, fantasyName, rg, cpf_Cnpj, birthday, email, phone, whatsapp, cep, road, number, district, city, uf, created_at: new Date(),
      });
      this.locatorCompany.push(locatorCompany);
      
      await collections.locatorCompany.insertOne(locatorCompany).then((result) => {
        //console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }

  async session(email: string, username: string, password: string){
    return {
      email,
      username,
      password
    }
  }
  async sessionFast(id: string){
    return {
     id
    }
  }

  list(){ }

  update({id, idCompany, name, fantasyName, rg, cpf_Cnpj, birthday, email, phone, whatsapp, cep, road, number, district, city, uf, }):void {}

  async delete({id}) {
    await collections.locatorCompany.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { LocatorCompanyRepository };




