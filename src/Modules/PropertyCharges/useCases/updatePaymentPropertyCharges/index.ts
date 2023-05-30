import { PaymentPropertyChargesRepository } from "../../repositories/implementations/PaymentPropertyChargesRepository";
import { UpdatePaymentPropertyChargesController } from "./UpdatePaymentPropertyChargesController";
import { UpdatePaymentPropertyChargesUseCase } from "./UpdatePaymentPropertyChargesUseCase";

const paymentpropertyChargesRepository = PaymentPropertyChargesRepository.getInstance();

const updatePaymentPropertyChargesUseCase = new UpdatePaymentPropertyChargesUseCase(paymentpropertyChargesRepository);

const updatePaymentPropertyChargesController = new UpdatePaymentPropertyChargesController(updatePaymentPropertyChargesUseCase);

export { updatePaymentPropertyChargesController };
