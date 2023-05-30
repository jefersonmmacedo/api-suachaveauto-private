import { ILocatorCompanyRepository } from "../../repositories/ILocatorCompanyRepository";

interface IRequest {
  id: string;
  idCompany: string;
  name: string;
  fantasyName: string;
  rg: string;
  cpf_Cnpj: string;
  birthday: string;
  email: string;
  phone: string;
  whatsapp: string;
  cep: string;
  road: string;
  number: string;
  district: string;
  city: string;
  uf: string;
}

class CreateLocatorCompanyUseCase {
  constructor(private LocatorCompanyRepository: ILocatorCompanyRepository) {
    " ";
  }
  
  async execute({
    id, idCompany, name, fantasyName, rg, cpf_Cnpj, birthday, email, phone, whatsapp, cep, road, number, district, city, uf,
   }: IRequest): Promise<void> {
    // const findEmail = await this.LocatorCompanyRepository.findByEmail(email);
  
      await this.LocatorCompanyRepository.create({
        id, idCompany, name, fantasyName, rg, cpf_Cnpj, birthday, email, phone, whatsapp, cep, road, number, district, city, uf,
      });

  }
}

export { CreateLocatorCompanyUseCase };