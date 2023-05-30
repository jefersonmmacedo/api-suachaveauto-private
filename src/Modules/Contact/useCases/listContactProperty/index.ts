import { ContactRepository } from "../../repositories/implementations/ContactRepository";
import { ListContactPropertyController } from "./ListContactPropertyController";
import { ListContactPropertyUseCase } from "./ListContactPropertyUseCase";

const contactRepository = ContactRepository.getInstance();

const listContactPropertyUsecase = new ListContactPropertyUseCase(contactRepository);

const listContactPropertyController = new ListContactPropertyController(listContactPropertyUsecase);

export { listContactPropertyController };
