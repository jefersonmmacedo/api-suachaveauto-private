import { GuarantorCompanyRepository } from "../../../GuarantorCompany/repositories/implementations/GuarantorCompanyRepository";
import { ListGuarantorCompanyUseCase } from "./ListGuarantorCompanyUseCase";
import { ListGuarantorCompanyController } from "./ListGuarantorCompanyController";

const guarantorCompanyRepository = GuarantorCompanyRepository.getInstance();

const listGuarantorCompanyUsecase = new ListGuarantorCompanyUseCase(guarantorCompanyRepository);

const listGuarantorCompanyController = new ListGuarantorCompanyController(listGuarantorCompanyUsecase);

export { listGuarantorCompanyController };
