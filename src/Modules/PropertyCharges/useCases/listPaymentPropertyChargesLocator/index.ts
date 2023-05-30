import { PaymentPropertyChargesRepository } from "../../repositories/implementations/PaymentPropertyChargesRepository";
import { ListPaymentPropertyChargesLocatorUseCase } from "./ListPaymentPropertyChargesLocatorUseCase";
import { ListPaymentPropertyChargesLocatorController } from "./ListPaymentPropertyChargesLocatorController";

const paymentpropertyChargesRepository = PaymentPropertyChargesRepository.getInstance();

const listPaymentPropertyChargesLocatorUsecase = new ListPaymentPropertyChargesLocatorUseCase(paymentpropertyChargesRepository);

const listPaymentPropertyChargesLocatorController = new ListPaymentPropertyChargesLocatorController(listPaymentPropertyChargesLocatorUsecase);

export { listPaymentPropertyChargesLocatorController };
