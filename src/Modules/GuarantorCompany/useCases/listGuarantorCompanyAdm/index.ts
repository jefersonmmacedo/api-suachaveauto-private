import { GuarantorCompanyRepository } from "../../repositories/implementations/GuarantorCompanyRepository";
import { ListGuarantorCompanyAdmUseCase } from "./ListGuarantorCompanyAdmUseCase";
import { ListGuarantorCompanyAdmController } from "./ListGuarantorCompanyAdmController";

const guarantorCompanyAdmRepository = GuarantorCompanyRepository.getInstance();

const listGuarantorCompanyAdmUsecase = new ListGuarantorCompanyAdmUseCase(guarantorCompanyAdmRepository);

const listGuarantorCompanyAdmController = new ListGuarantorCompanyAdmController(listGuarantorCompanyAdmUsecase);

export { listGuarantorCompanyAdmController };
