import { Router } from "express";
import { connectToDatabase } from "../../services/database.service";
import { AccountClientRouter } from "./accounts/client.routes";
import { CompanyRouter } from "./accounts/company.routes";
import { AcessRouter } from "./Acess/acess.routes";
import { bankRoutes } from "./bank/bank.routes";
import { TeamRouter } from "./team/team.routes";
import { clientCompanyRoutes } from "./clientCompany/clientCompany.routes";
import { contactRoutes } from "./contact/contact.routes";
import { favoriteRoutes } from "./favorite/favorite.routes";
import { financerRoutes } from "./financer/financer.routes";
import { mailRoutes } from "./mail/mail";
// import { uploadFilesRouter } from "./uploadFiles/uploadFiles";
import { negotiationsRoutes } from "./negotiations/negotiations.routes";
import { notificationsRoutes } from "./notification/notification.routes";
import { MyPlainRoutes } from "./plains/myplain.routes";
import { paymentRentRoutes } from "./plains/paymentRent.routes";
import { paymentsRoutes } from "./plains/payments.routes";
import { plainsRoutes } from "./plains/plains.routes";
import { AutosRoutes } from "./autos/autos.routes";
import { groupsRecuperation } from "./recuperation/recuperation.routes";
import { SchedulingRouter } from "./scheduling/scheduling.routes";
import { SessionClientRouter } from "./sessions/sessions.routes";
import { EvaluationRoutes } from "./evaluation/evaluation.routes";
import { ticketRentRoutes } from "./ticketRent/ticketRent.routes";
import { replyTicketRentRoutes } from "./ticketRent/replyTicketRent.routes";
import { ticketSupportRoutes } from "./ticketSupport/ticketSupport.routes";
import { replyTicketSupportRoutes } from "./ticketSupport/replyTicketSupport.routes";
import { contractsRoutes } from "./negotiations/contracts.routes";
import { documentationsRoutes } from "./negotiations/documentations.routes";
import { processNotesRoutes } from "./negotiations/processNotes.routes";
import { RoomRouter } from "./chatMessage/room.routes";
import { MessageRouter } from "./chatMessage/message.routes";
import { DateReadyRouter } from "./DateReady/dateReady.routes";
import { SchedulingEvaluationRouter } from "./schedulingEvaluation/schedulingEvaluation.routes";
import { WaitingListRouter } from "./WaitingList/waitingList.routes";
import { gerencianetRouter } from "./gerencianet/gerencianet";
import { AlertClientRouter } from "./AlertClient/alertClient.routes";
import { SearchClientRouter } from "./SearchClient/searchClient.routes";
import { FeaturesRouter } from "./Features/features.routes";
import { LocatorCompanyRoutes } from "./locator/locator.routes";
import { guarantorCompanyRoutes } from "./guarantorCompany/guarantorCompany.routes";
import { WebSiteClientRouter } from "./WebSiteClient/webSiteClient.routes";
import { ProposalsRouter } from "./Proposals/proposals.routes";
import { BlogRouter } from "./Blog/blog.routes";
import { DeletedsClientRouter } from "./DeletedsClient/deletedsClient.routes";
import { DeletedsCompanyRouter } from "./DeletedsCompany/deletedsCompany.routes";
import { fipeRoutes } from "./fipe/fipe";
import { LicensingRouter } from "./Licensing/licensing.routes";
import { ViewAutoRoutes } from "./viewAuto/viewAuto.routes";
// import { uploadFilesAwsRouter } from "./uploadFiles/uploadFilesAws";

const router = Router();
connectToDatabase()
  .then(() => {
    router.use("/mail", mailRoutes);
    router.use("/fipe", fipeRoutes);
    router.use("/company", CompanyRouter)
    router.use("/client", AccountClientRouter);
    router.use("/session", SessionClientRouter);
    router.use("/autos", AutosRoutes);
    router.use("/plains", plainsRoutes);
    router.use("/myplain", MyPlainRoutes);
    router.use("/payments", paymentsRoutes);
    router.use("/paymentRent", paymentRentRoutes);
    router.use("/favorite", favoriteRoutes);
    router.use("/scheduling", SchedulingRouter);
    router.use("/schedulingEvaluation", SchedulingEvaluationRouter);
    router.use("/contact", contactRoutes);
    router.use("/bank", bankRoutes);
    router.use("/negotiations", negotiationsRoutes);
    router.use("/notification", notificationsRoutes);
    router.use("/clientCompany", clientCompanyRoutes);
    router.use("/guarantorCompany", guarantorCompanyRoutes);
    router.use("/financer", financerRoutes);
    router.use("/acess", AcessRouter);
    router.use("/team", TeamRouter);
    router.use("/alertClient", AlertClientRouter);
    router.use("/searchClient", SearchClientRouter);
    router.use("/recuperation", groupsRecuperation);
    router.use("/messages", MessageRouter);
    router.use("/rooms", RoomRouter);
    router.use("/evaluation", EvaluationRoutes);
    router.use("/ticketrent", ticketRentRoutes);
    router.use("/replyticketrent", replyTicketRentRoutes);
    router.use("/ticketsupport", ticketSupportRoutes);
    router.use("/replyticketsupport", replyTicketSupportRoutes);
    router.use("/negotiations", negotiationsRoutes);
    router.use("/documentations", documentationsRoutes);
    router.use("/contracts", contractsRoutes);
    router.use("/processnotes", processNotesRoutes);
    router.use("/dateready", DateReadyRouter);
    router.use("/waitingList", WaitingListRouter);
    router.use("/gerencianet", gerencianetRouter);
    router.use("/features", FeaturesRouter);
    router.use("/licensings", LicensingRouter);
    router.use("/locator", LocatorCompanyRoutes);
    router.use("/webSiteClient", WebSiteClientRouter);
    router.use("/proposals", ProposalsRouter);
    router.use("/blog", BlogRouter);
    router.use("/deletedClient", DeletedsClientRouter);
    router.use("/deletedCompany", DeletedsCompanyRouter);
    router.use("/viewAuto", ViewAutoRoutes);
    // router.use("/uploadfiles", uploadFilesRouter);
    // router.use("/uploadfilesaws", uploadFilesAwsRouter);
  }).catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });

export { router };