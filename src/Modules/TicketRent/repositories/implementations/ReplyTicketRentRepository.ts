import { collections } from "../../../../../services/database.service";
import { ReplyTicketRent } from "../../models/ReplyTicketRent";
import { IReplyTicketRentDTO, IReplyTicketRentRepository } from "../IReplyTicketRentRepository";
import {v4 as uuidv4} from 'uuid'

class ReplyTicketRentRepository implements IReplyTicketRentRepository {
  private replyTicketRent: ReplyTicketRent[];

  private static INSTANCE: ReplyTicketRentRepository;

  private constructor() {
    this.replyTicketRent = [];
  }

  public static getInstance(): ReplyTicketRentRepository {
    if (!ReplyTicketRentRepository.INSTANCE) {
      ReplyTicketRentRepository.INSTANCE = new ReplyTicketRentRepository();
    }

    return ReplyTicketRentRepository.INSTANCE;
  }

  async create({ id, idTicket, IdClient, idCompany, idProperty, message, imagesProperty }: IReplyTicketRentDTO) {
    const ticket: ReplyTicketRent = new ReplyTicketRent();
    const _id = uuidv4()
    Object.assign(ticket, {
      _id, id: _id, idTicket, IdClient, idCompany, idProperty,message, imagesProperty, created_at: new Date(),
    });

    this.replyTicketRent.push(ticket);
    console.log(ticket)

    await collections.replyTicketRent.insertOne(ticket).then((result) => {
      console.log(result) 
    }).catch(error => {
      console.log(error)
    })
  }

  list(){}

  async delete({id}) {
    await collections.replyTicketRent.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

}

export { ReplyTicketRentRepository };
