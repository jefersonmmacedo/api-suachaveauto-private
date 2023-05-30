import { MessageRepository } from "../../repositories/implementations/MessageRepository";
import { ListMessageFriendController } from "./ListMessageFriendController";
import { ListMessageFriendUseCase } from "./ListMessageFriendUseCase";

const messageRepository = MessageRepository.getInstance();

const listMessageFriendUsecase = new ListMessageFriendUseCase(messageRepository);

const listMessageFriendController = new ListMessageFriendController(listMessageFriendUsecase);

export { listMessageFriendController };
