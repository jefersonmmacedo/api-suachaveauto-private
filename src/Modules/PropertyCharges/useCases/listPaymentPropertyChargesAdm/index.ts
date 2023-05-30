import { PaymentPropertyChargesRepository } from "../../repositories/implementations/PaymentPropertyChargesRepository";
import { ListPaymentPropertyChargesAdmUseCase } from "./ListPaymentPropertyChargesAdmUseCase";
import { ListPaymentPropertyChargesAdmController } from "./ListPaymentPropertyChargesAdmController";

const PaymentpropertyChargesAdmRepository = PaymentPropertyChargesRepository.getInstance();

const listPaymentPropertyChargesAdmUsecase = new ListPaymentPropertyChargesAdmUseCase(PaymentpropertyChargesAdmRepository);

const listPaymentPropertyChargesAdmController = new ListPaymentPropertyChargesAdmController(listPaymentPropertyChargesAdmUsecase);

export { listPaymentPropertyChargesAdmController };
