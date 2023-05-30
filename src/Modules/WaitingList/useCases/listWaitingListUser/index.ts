import { WaitingListRepository } from "../../repositories/implementations/WaitingListRepository";
import { ListWaitingListUserController } from "./ListWaitingListUserController";
import { ListWaitingListUserUseCase } from "./ListWaitingListUserUseCase";

const waitingListRepository = WaitingListRepository.getInstance();

const listWaitingListUserUsecase = new ListWaitingListUserUseCase(waitingListRepository);

const listWaitingListUserController = new ListWaitingListUserController(listWaitingListUserUsecase);

export { listWaitingListUserController };
