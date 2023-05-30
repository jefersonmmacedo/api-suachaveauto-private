import { GuarantorCompanyRepository } from "../../repositories/implementations/GuarantorCompanyRepository";
import { UpdateGuarantorCompanyController } from "./UpdateGuarantorCompanyController";
import { UpdateGuarantorCompanyUseCase } from "./UpdateGuarantorCompanyUseCase";

const guarantorCompanyRepository = GuarantorCompanyRepository.getInstance();

const updateGuarantorCompanyUseCase = new UpdateGuarantorCompanyUseCase(guarantorCompanyRepository);

const updateGuarantorCompanyController = new UpdateGuarantorCompanyController(updateGuarantorCompanyUseCase);

export { updateGuarantorCompanyController };
