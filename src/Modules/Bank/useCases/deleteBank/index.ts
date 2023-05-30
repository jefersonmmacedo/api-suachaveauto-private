import { BankRepository } from "../../repositories/implementations/BankRepository";
import { DeleteBankController } from "./DeleteBankController";
import { DeleteBankUseCase } from "./DeleteBankUseCase";

const bankRepository = BankRepository.getInstance();
const deleteBankUseCase = new DeleteBankUseCase(bankRepository);
const deleteBankController = new DeleteBankController(deleteBankUseCase);

export { deleteBankController };
