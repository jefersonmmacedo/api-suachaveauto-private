import { collections } from "../../../../../services/database.service";
import { ReplyTicketSupport } from "../../models/ReplyTicketSupport";
import { IReplyTicketSupportDTO, IReplyTicketSupportRepository } from "../IReplyTicketSupportRepository";
import {v4 as uuidv4} from 'uuid'

class ReplyTicketSupportRepository implements IReplyTicketSupportRepository {
  private replyTicketSupport: ReplyTicketSupport[];

  private static INSTANCE: ReplyTicketSupportRepository;

  private constructor() {
    this.replyTicketSupport = [];
  }

  public static getInstance(): ReplyTicketSupportRepository {
    if (!ReplyTicketSupportRepository.INSTANCE) {
      ReplyTicketSupportRepository.INSTANCE = new ReplyTicketSupportRepository();
    }

    return ReplyTicketSupportRepository.INSTANCE;
  }

  async create({ id, idTicket, IdClient, idCompany, idProperty, message, imagesProperty }: IReplyTicketSupportDTO) {
    const ticket: ReplyTicketSupport = new ReplyTicketSupport();
    const _id = uuidv4()
    Object.assign(ticket, {
      _id, id: _id, idTicket, IdClient, idCompany, idProperty,message, imagesProperty, created_at: new Date(),
    });

    this.replyTicketSupport.push(ticket);
    console.log(ticket)

    await collections.replyTicketSupport.insertOne(ticket).then((result) => {
      console.log(result) 
    }).catch(error => {
      console.log(error)
    })
  }

  list(){}

  async delete({id}) {
    await collections.replyTicketSupport.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

}

export { ReplyTicketSupportRepository };
