import { LicensingRepository } from "../../repositories/implementations/LicensingRepository";
import { DeleteLicensingController } from "./DeleteLicensingController";
import { DeleteLicensingUseCase } from "./DeleteLicensingUseCase";

const licensingRepository = LicensingRepository.getInstance();
const deleteLicensingUseCase = new DeleteLicensingUseCase(licensingRepository);
const deleteLicensingController = new DeleteLicensingController(deleteLicensingUseCase);

export { deleteLicensingController };
