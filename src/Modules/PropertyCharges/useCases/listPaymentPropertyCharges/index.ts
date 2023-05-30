import { PaymentPropertyChargesRepository } from "../../repositories/implementations/PaymentPropertyChargesRepository";
import { ListPaymentPropertyChargesUseCase } from "./ListPaymentPropertyChargesUseCase";
import { ListPaymentPropertyChargesController } from "./ListPaymentPropertyChargesController";

const paymentpropertyChargesRepository = PaymentPropertyChargesRepository.getInstance();

const listPaymentPropertyChargesUsecase = new ListPaymentPropertyChargesUseCase(paymentpropertyChargesRepository);

const listPaymentPropertyChargesController = new ListPaymentPropertyChargesController(listPaymentPropertyChargesUsecase);

export { listPaymentPropertyChargesController };
