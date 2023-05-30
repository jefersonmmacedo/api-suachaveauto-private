import { GuarantorCompanyRepository } from "../../repositories/implementations/GuarantorCompanyRepository";
import { DeleteGuarantorCompanyController } from "./DeleteGuarantorCompanyController";
import { DeleteGuarantorCompanyUseCase } from "./DeleteGuarantorCompanyUseCase";

const guarantorCompanyRepository = GuarantorCompanyRepository.getInstance();
const deleteGuarantorCompanyUseCase = new DeleteGuarantorCompanyUseCase(guarantorCompanyRepository);
const deleteGuarantorCompanyController = new DeleteGuarantorCompanyController(deleteGuarantorCompanyUseCase);

export { deleteGuarantorCompanyController };
