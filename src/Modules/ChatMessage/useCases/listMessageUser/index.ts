import { MessageRepository } from "../../repositories/implementations/MessageRepository";
import { ListMessageUserController } from "./ListMessageUserController";
import { ListMessageUserUseCase } from "./ListMessageUserUseCase";

const messageRepository = MessageRepository.getInstance();

const listMessageUserUsecase = new ListMessageUserUseCase(messageRepository);

const listMessageUserController = new ListMessageUserController(listMessageUserUsecase);

export { listMessageUserController };
