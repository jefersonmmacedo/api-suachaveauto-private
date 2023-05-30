import { GuarantorCompany } from "../../models/GuarantorCompany";
import { IGuarantorCompanyRepository, IGuarantorCompanyDTO } from "../IGuarantorCompanyRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class GuarantorCompanyRepository implements IGuarantorCompanyRepository {
  private guarantorCompany: GuarantorCompany[];

  private static INSTANCE: GuarantorCompanyRepository;

  private constructor() {
    this.guarantorCompany = [];
  }

  public static getInstance(): GuarantorCompanyRepository {
    if (!GuarantorCompanyRepository.INSTANCE) {
      GuarantorCompanyRepository.INSTANCE = new GuarantorCompanyRepository();
    }

    return GuarantorCompanyRepository.INSTANCE;
  }

 
  async findById(id: string): Promise<void>  {
    const findNickname = await collections.guarantorCompany.findOne({id})
    if(findNickname) {
      throw new Error("Nickname already exists!")
    } 
  }

  async create({idProcess, typeGuarantor, idCompany, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
    number, district, city, uf, interest, type, subtype, cityPreference, ufPreference, attendance, }: IGuarantorCompanyDTO) {
    const account: GuarantorCompany = new GuarantorCompany();
      const idMini = uuidv4()
      const id = idMini.substring(0,8)
      Object.assign(account, {
        id, _id: id, idProcess, typeGuarantor, idCompany, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
        number, district, city, uf, interest, type, subtype, cityPreference, ufPreference, attendance, created_at: new Date(),
      });
      this.guarantorCompany.push(account);
      
      await collections.guarantorCompany.insertOne(account).then((result) => {
        //console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }



  list(){ }

  update({id, idProcess, typeGuarantor, name, fantasyName, rg, cpf_Cnpj, email, phone, whatsapp, avatar, road,
    number, district, city, uf, interest, type, subtype, cityPreference, ufPreference, attendance, }):void {}

  async delete({id}) {
    await collections.account.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { GuarantorCompanyRepository };




