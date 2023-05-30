import { AccountClientRepository } from "../../repositories/implementations/AccountClientRepository";
import { DeleteAccountClientController } from "./DeleteAccountClientController";
import { DeleteAccountClientUseCase } from "./DeleteAccountClientUseCase";

const accountClientRepository = AccountClientRepository.getInstance();
const deleteAccountClientUseCase = new DeleteAccountClientUseCase(accountClientRepository);
const deleteAccountClientController = new DeleteAccountClientController(deleteAccountClientUseCase);

export { deleteAccountClientController };
