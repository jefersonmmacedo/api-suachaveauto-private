import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { collections } from "../../../../../services/database.service";
import { ISquadRepository } from "../../repositories/ISquadRepository";

interface IResponse {
  token: string;
  id: string;
  avatar: string;
  name: string;
  fantasyName: string;
  rg: string;
  cpf: string;
  profession: string;
  birthday: Date;
  register: string;
  email: string;
  phone: string;
  whatsapp: string;
  cep: string;
  road: string;
  number: string;
  district: string;
  city: string;
  uf: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  bank: string;
  agency: string;
  typeAccount: string;
  account: string;
  typeKeyPix: string;
  keypix: string;
  password: string;
  expiresIn: string;
  date: Date;
}

interface IRequest {
  id: string;
  email: string;
  password: string;
}

class AuthenticateSquadUseCase {
  constructor(private accountRepository: ISquadRepository) {
    " ";
  }
  
  async execute({email, id, password  }: IRequest): Promise<IResponse> {
      await this.accountRepository.session(email, id, password);

      let user;

      if(email !== undefined) {
        user = await collections.account.findOne({email});
      }
      if(id !== undefined) {
        user = await collections.account.findOne({id});
      }
      
      const passwordCompare = await compare(password, user.password)


      if(!user ) {
        throw new Error("Username or email, incorrect!")
        }  else if(!passwordCompare) {
          throw new Error("password, incorrect!")
        }
        const userData = {
          id: user.id,
          avatar: user.avatar,
          name: user.name,
          fantasyName: user.fantasyName,
          rg: user.rg,
          cpf: user.cpf,
          profession: user.profession,
          birthday: user.birthday,
          register: user.register,
          email: user.email,
          phone: user.phone,
          whatsapp: user.whatsapp,
          cep: user.cep,
          road: user.road,
          number: user.number,
          district: user.district,
          city: user.city,
          uf: user.uf,
          instagram: user.instagram,
          facebook: user.facebook,
          linkedin: user.linkedin,
          bank: user.bank,
          agency: user.agency,
          typeAccount: user.typeAccount,
          account: user.account,
          typeKeyPix: user.typeKeyPix,
          keypix: user.keypix,
          password: user.password,
          expiresIn: user.expiresIn,
          date: user.created_at,
        }
        console.log(userData)

      const token = sign({
        id: user.id,
        avatar: user.avatar,
        name: user.name,
        fantasyName: user.fantasyName,
        rg: user.rg,
        cpf: user.cpf,
        profession: user.profession,
        birthday: user.birthday,
        register: user.register,
        email: user.email,
        phone: user.phone,
        whatsapp: user.whatsapp,
        cep: user.cep,
        road: user.road,
        number: user.number,
        district: user.district,
        city: user.city,
        uf: user.uf,
        instagram: user.instagram,
        facebook: user.facebook,
        linkedin: user.linkedin,
        bank: user.bank,
        agency: user.agency,
        typeAccount: user.typeAccount,
        account: user.account,
        typeKeyPix: user.typeKeyPix,
        keypix: user.keypix,
        password: user.password,
        date: user.created_at,
      }, "d64d7c8b83dd7212c25c3745933ee76e", 
      {
        subject: userData.id,
        expiresIn: "1d",
      });

      // console.log(token)
      // console.log(userData)

      return {
          id: user.id,
          avatar: user.avatar,
          name: user.name,
          fantasyName: user.fantasyName,
          rg: user.rg,
          cpf: user.cpf,
          profession: user.profession,
          birthday: user.birthday,
          register: user.register,
          email: user.email,
          phone: user.phone,
          whatsapp: user.whatsapp,
          cep: user.cep,
          road: user.road,
          number: user.number,
          district: user.district,
          city: user.city,
          uf: user.uf,
          instagram: user.instagram,
          facebook: user.facebook,
          linkedin: user.linkedin,
          bank: user.bank,
          agency: user.agency,
          typeAccount: user.typeAccount,
          account: user.account,
          typeKeyPix: user.typeKeyPix,
          keypix: user.keypix,
          password: user.password,
          date: user.created_at,
          token:token,
          expiresIn: "1d",
      }
  }
}

export { AuthenticateSquadUseCase };