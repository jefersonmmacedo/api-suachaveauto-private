import { Router } from "express";
import { createPaymentRentController } from "../../Modules/PaymentRent/useCases/createPaymentRent";
import { deletePaymentRentController } from "../../Modules/PaymentRent/useCases/deletePaymentRent";
import { listPaymentRentController } from "../../Modules/PaymentRent/useCases/listPaymentRent";
import { listPaymentRentAllController } from "../../Modules/PaymentRent/useCases/listPaymentRentAll";
import { updatePaymentRentController } from "../../Modules/PaymentRent/useCases/updatePaymentRent";


const paymentRentRoutes = Router();

paymentRentRoutes.post("/", (req, res) => {
  return createPaymentRentController.handle(req, res);
});

paymentRentRoutes.get("/all", (req, res) => {
  return listPaymentRentAllController.handle(req, res);
});

paymentRentRoutes.get("/:idCompany", (req, res) => {
  return listPaymentRentController.handle(req, res);
});

paymentRentRoutes.patch("/:id", (req, res) => {
  return updatePaymentRentController.handle(req, res);
});
paymentRentRoutes.delete("/:id", (req, res) => {
  return deletePaymentRentController.handle(req, res);
});

export { paymentRentRoutes };


