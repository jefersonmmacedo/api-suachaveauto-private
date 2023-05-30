import { WaitingListRepository } from "../../repositories/implementations/WaitingListRepository";
import { ListWaitingListController } from "./ListWaitingListController";
import { ListWaitingListUseCase } from "./ListWaitingListUseCase";

const waitingListRepository = WaitingListRepository.getInstance();

const listWaitingListUsecase = new ListWaitingListUseCase(waitingListRepository);

const listWaitingListController = new ListWaitingListController(listWaitingListUsecase);

export { listWaitingListController };
