import { IMessageRepository } from "../../repositories/IMessageRepository";

interface IRequest {
  id: string;
  idRoom: string;
  idAccount: string;
  idFriend: string;
  name: string;
  avatar: string;
  text: string;
  link: string;
  type: string;
}

class CreateMessageUseCase {
  constructor(private MessageRepository: IMessageRepository) {
    " ";
  }

  execute({ id, idRoom, idAccount, idFriend, name, avatar, text, link, type, }: IRequest): void {
    this.MessageRepository.create({
      id, idRoom, idAccount, idFriend, name, avatar, text, link, type,
    });
  }
}

export { CreateMessageUseCase };
