import { LicensingRepository } from "../../repositories/implementations/LicensingRepository";
import { ListLicensingController } from "./ListLicensingController";
import { ListLicensingUseCase } from "./ListLicensingUseCase";

const licensingRepository = LicensingRepository.getInstance();

const listLicensingUsecase = new ListLicensingUseCase(licensingRepository);

const listLicensingController = new ListLicensingController(listLicensingUsecase);

export { listLicensingController };
