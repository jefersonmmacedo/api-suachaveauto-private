import { MessageRepository } from "../../repositories/implementations/MessageRepository";
import { ListMessageClientController } from "./ListMessageClientController";
import { ListMessageClientUseCase } from "./ListMessageClientUseCase";

const messageRepository = MessageRepository.getInstance();

const listMessageClientUsecase = new ListMessageClientUseCase(messageRepository);

const listMessageClientController = new ListMessageClientController(listMessageClientUsecase);

export { listMessageClientController };
