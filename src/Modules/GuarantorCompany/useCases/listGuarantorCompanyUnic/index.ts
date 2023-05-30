import { GuarantorCompanyRepository } from "../../repositories/implementations/GuarantorCompanyRepository";
import { ListGuarantorCompanyUnicUseCase } from "./ListGuarantorCompanyUnicUseCase";
import { ListGuarantorCompanyUnicController } from "./ListGuarantorCompanyUnicController";

const guarantorCompanyRepository = GuarantorCompanyRepository.getInstance();

const listGuarantorCompanyUnicUsecase = new ListGuarantorCompanyUnicUseCase(guarantorCompanyRepository);

const listGuarantorCompanyUnicController = new ListGuarantorCompanyUnicController(listGuarantorCompanyUnicUsecase);

export { listGuarantorCompanyUnicController };
