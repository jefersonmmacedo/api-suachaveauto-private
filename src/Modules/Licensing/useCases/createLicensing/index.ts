import { LicensingRepository } from "../../repositories/implementations/LicensingRepository";
import { CreateLicensingController } from "./CreateLicensingController";
import { CreateLicensingUseCase } from "./CreateLicensingUseCase";

const licensingRepository = LicensingRepository.getInstance();

const createLicensingUseCase = new CreateLicensingUseCase(licensingRepository);

const createLicensingController = new CreateLicensingController(createLicensingUseCase);

export { createLicensingController };
