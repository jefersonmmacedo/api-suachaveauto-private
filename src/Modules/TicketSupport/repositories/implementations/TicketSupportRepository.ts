import { collections } from "../../../../../services/database.service";
import { TicketSupport } from "../../models/TicketSupport";
import { ITicketSupportDTO, ITicketSupportRepository } from "../ITicketSupportRepository";
import {v4 as uuidv4} from 'uuid'

class TicketSupportRepository implements ITicketSupportRepository {
  private ticketSupport: TicketSupport[];

  private static INSTANCE: TicketSupportRepository;

  private constructor() {
    this.ticketSupport = [];
  }

  public static getInstance(): TicketSupportRepository {
    if (!TicketSupportRepository.INSTANCE) {
      TicketSupportRepository.INSTANCE = new TicketSupportRepository();
    }

    return TicketSupportRepository.INSTANCE;
  }

  async create({ IdClient, idCompany, idProperty, status, priority, type, message, imagesProperty, }: ITicketSupportDTO) {
    const room: TicketSupport = new TicketSupport();
    const _id = uuidv4()
    Object.assign(room, {
      _id, id: _id, IdClient, idCompany, idProperty, status, priority, type, message, imagesProperty,  created_at: new Date(),
    });

    this.ticketSupport.push(room);
    console.log(room)

    await collections.ticketSupport.insertOne(room).then((result) => {
      console.log(result) 
    }).catch(error => {
      console.log(error)
    })
  }

  list(){}

  async delete({id}) {
    await collections.ticketSupport.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

}

export { TicketSupportRepository };
