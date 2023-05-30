import { RentAdjustmentRepository } from "../../repositories/implementations/RentAdjustmentRepository";
import { CreateRentAdjustmentController } from "./CreateRentAdjustmentController";
import { CreateRentAdjustmentUseCase } from "./CreateRentAdjustmentUseCase";

const rentAdjustmentRepository = RentAdjustmentRepository.getInstance();

const createRentAdjustmentUseCase = new CreateRentAdjustmentUseCase(rentAdjustmentRepository);

const createRentAdjustmentController = new CreateRentAdjustmentController(createRentAdjustmentUseCase);

export { createRentAdjustmentController };
