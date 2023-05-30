import { GuarantorCompanyRepository } from "../../repositories/implementations/GuarantorCompanyRepository";
import { CreateGuarantorCompanyController } from "./CreateGuarantorCompanyController";
import { CreateGuarantorCompanyUseCase } from "./CreateGuarantorCompanyUseCase";

const guarantorCompanyRepository = GuarantorCompanyRepository.getInstance();

const createGuarantorCompanyUseCase = new CreateGuarantorCompanyUseCase(guarantorCompanyRepository);

const createGuarantorCompanyController = new CreateGuarantorCompanyController(createGuarantorCompanyUseCase);

export { createGuarantorCompanyController };
