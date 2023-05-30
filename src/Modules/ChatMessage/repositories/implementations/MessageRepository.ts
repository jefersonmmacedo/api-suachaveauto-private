import { Message } from "../../models/Message";
import { ICreateMessageDTO, IMessageRepository } from "../IMessageRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class MessageRepository implements IMessageRepository {
  private message: Message[];

  private static INSTANCE: MessageRepository;

  private constructor() {
    this.message = [];
  }

  public static getInstance(): MessageRepository {
    if (!MessageRepository.INSTANCE) {
      MessageRepository.INSTANCE = new MessageRepository();
    }

    return MessageRepository.INSTANCE;
  }

 async create({
  idRoom, idAccount, idFriend, name, avatar, text, link, type,
  }: ICreateMessageDTO) {
    const message: Message = new Message();
    const _id = uuidv4()
    Object.assign(message, {
      _id, id: _id,
      idRoom, idAccount, idFriend, name, avatar, text, link, type,
      created_at: new Date()
    });

    this.message.push(message);
    console.log(message)
    await collections.messagesRooms.insertOne(message).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ }){}

  async delete({id}) {
    await collections.messagesRooms.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { MessageRepository };
