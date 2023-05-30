import { collections } from "../../../../../services/database.service";
import { TicketRent } from "../../models/TicketRent";
import { ITicketRentDTO, ITicketRentRepository } from "../ITicketRentRepository";
import {v4 as uuidv4} from 'uuid'

class TicketRentRepository implements ITicketRentRepository {
  private ticketRent: TicketRent[];

  private static INSTANCE: TicketRentRepository;

  private constructor() {
    this.ticketRent = [];
  }

  public static getInstance(): TicketRentRepository {
    if (!TicketRentRepository.INSTANCE) {
      TicketRentRepository.INSTANCE = new TicketRentRepository();
    }

    return TicketRentRepository.INSTANCE;
  }

  async create({ IdClient, idCompany, idProperty, status, priority, type, message, imagesProperty, }: ITicketRentDTO) {
    const room: TicketRent = new TicketRent();
    const _id = uuidv4()
    Object.assign(room, {
      _id, id: _id, IdClient, idCompany, idProperty, status, priority, type, message, imagesProperty,  created_at: new Date(),
    });

    this.ticketRent.push(room);
    console.log(room)

    await collections.ticketRent.insertOne(room).then((result) => {
      console.log(result) 
    }).catch(error => {
      console.log(error)
    })
  }

  list(){}

  async delete({id}) {
    await collections.ticketRent.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

}

export { TicketRentRepository };
