import { GuarantorCompanyRepository } from "../../repositories/implementations/GuarantorCompanyRepository";
import { ListGuarantorCompanyEmailUseCase } from "./ListGuarantorCompanyEmailUseCase";
import { ListGuarantorCompanyEmailController } from "./ListGuarantorCompanyEmailController";

const guarantorCompanyRepository = GuarantorCompanyRepository.getInstance();

const listGuarantorCompanyEmailUsecase = new ListGuarantorCompanyEmailUseCase(guarantorCompanyRepository);

const listGuarantorCompanyEmailController = new ListGuarantorCompanyEmailController(listGuarantorCompanyEmailUsecase);

export { listGuarantorCompanyEmailController };
