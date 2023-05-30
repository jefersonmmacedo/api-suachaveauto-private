import { PropertyCharges } from "../../models/PropertyCharges";
import { IPropertyChargesRepository, IPropertyChargesDTO } from "../IPropertyChargesRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class PropertyChargesRepository implements IPropertyChargesRepository {
  private propertyCharges: PropertyCharges[];

  private static INSTANCE: PropertyChargesRepository;

  private constructor() {
    this.propertyCharges = [];
  }

  public static getInstance(): PropertyChargesRepository {
    if (!PropertyChargesRepository.INSTANCE) {
      PropertyChargesRepository.INSTANCE = new PropertyChargesRepository();
    }

    return PropertyChargesRepository.INSTANCE;
  }
  
  async findById(id: string): Promise<void>  {
    const findNickname = await collections.propertyCharges.findOne({id})
    if(findNickname) {
      throw new Error("Nickname already exists!")
    } 
  }

  async create({idCompany, idLocator, idProperty, type, description, value, deadline, period, alert, status, }: IPropertyChargesDTO) {
    const propertyCharges: PropertyCharges = new PropertyCharges();
      const idMini = uuidv4()
      const id = idMini.substring(0,8)
      Object.assign(propertyCharges, {
        id, _id: id, idCompany, idLocator, idProperty, type, description, value, deadline, period, alert, status, created_at: new Date(),
      });
      this.propertyCharges.push(propertyCharges);
      
      await collections.propertyCharges.insertOne(propertyCharges).then((result) => {
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

  update({id, idCompany, idLocator, idProperty, type, description, value, deadline, period, alert, status, }):void {}

  async delete({id}) {
    await collections.propertyCharges.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { PropertyChargesRepository };




