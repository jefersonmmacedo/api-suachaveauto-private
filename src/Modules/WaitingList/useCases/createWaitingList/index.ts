import { WaitingListRepository } from "../../repositories/implementations/WaitingListRepository";
import { CreateWaitingListController } from "./CreateWaitingListController";
import { CreateWaitingListUseCase } from "./CreateWaitingListUseCase";

const waitingListRepository = WaitingListRepository.getInstance();

const createWaitingListUseCase = new CreateWaitingListUseCase(waitingListRepository);

const createWaitingListController = new CreateWaitingListController(createWaitingListUseCase);

export { createWaitingListController };
