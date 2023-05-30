import { ContactRepository } from "../../repositories/implementations/ContactRepository";
import { DeleteContactController } from "./DeleteContactController";
import { DeleteContactUseCase } from "./DeleteContactUseCase";

const contactRepository = ContactRepository.getInstance();
const deleteContactUseCase = new DeleteContactUseCase(contactRepository);
const deleteContactController = new DeleteContactController(deleteContactUseCase);

export { deleteContactController };
