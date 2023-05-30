import { PaymentPropertyChargesRepository } from "../../repositories/implementations/PaymentPropertyChargesRepository";
import { CreatePaymentPropertyChargesController } from "./CreatePaymentPropertyChargesController";
import { CreatePaymentPropertyChargesUseCase } from "./CreatePaymentPropertyChargesUseCase";

const paymentPropertyChargesRepository = PaymentPropertyChargesRepository.getInstance();

const createPaymentPropertyChargesUseCase = new CreatePaymentPropertyChargesUseCase(paymentPropertyChargesRepository);

const createPaymentPropertyChargesController = new CreatePaymentPropertyChargesController(createPaymentPropertyChargesUseCase);

export { createPaymentPropertyChargesController };
