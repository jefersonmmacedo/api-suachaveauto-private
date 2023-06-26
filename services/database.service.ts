import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { 
  company?:mongoDB.Collection,
  account?:mongoDB.Collection,
  autos?:mongoDB.Collection,
  myPlain?:mongoDB.Collection,
  plains?:mongoDB.Collection,
  payments?:mongoDB.Collection,
  favorite?:mongoDB.Collection,
  contact?:mongoDB.Collection,
  scheduling?:mongoDB.Collection,
  schedulingEvaluation?:mongoDB.Collection,
  clientCompany?:mongoDB.Collection,
  guarantorCompany?:mongoDB.Collection,
  bank?:mongoDB.Collection,
  negotiations?:mongoDB.Collection,
  paymentRent?:mongoDB.Collection,
  financer?:mongoDB.Collection,
  notification?:mongoDB.Collection,
  alertClient?:mongoDB.Collection,
  searchClient?:mongoDB.Collection,
  access?:mongoDB.Collection,
  team?:mongoDB.Collection,
  recuperation?:mongoDB.Collection,
  viewAuto?:mongoDB.Collection,
  messagesRooms?:mongoDB.Collection,
  rooms?:mongoDB.Collection,
  evaluation?:mongoDB.Collection,
  ticketRent?:mongoDB.Collection,
  replyTicketRent?:mongoDB.Collection,
  ticketSupport?:mongoDB.Collection,
  replyTicketSupport?:mongoDB.Collection,
  processNotes?:mongoDB.Collection,
  documentations?:mongoDB.Collection,
  contracts?:mongoDB.Collection,
  messageReadData?:mongoDB.Collection,
  roomReadData?:mongoDB.Collection,
  notificationReadData?:mongoDB.Collection,
  waitingList?:mongoDB.Collection,
  webSiteClient?:mongoDB.Collection,
  locatorCompany?:mongoDB.Collection,
  autosCharges?:mongoDB.Collection,
  paymentCharges?:mongoDB.Collection,
  inspection?:mongoDB.Collection,
  features?:mongoDB.Collection,
  documentAuto?:mongoDB.Collection,
  squad?:mongoDB.Collection,
  deletedCompany?:mongoDB.Collection,
  deletedClient?:mongoDB.Collection,
  proposals?:mongoDB.Collection,
  blog?:mongoDB.Collection,
  schedulingConfig?:mongoDB.Collection,
  licensing?:mongoDB.Collection,
  rentAdjustment?:mongoDB.Collection,
 } = {}

export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
  await client.connect();
  const db: mongoDB.Db = client.db(process.env.DB_NAME);

      // company
      const companyCollection: mongoDB.Collection = db.collection(process.env.COMPANY_COLLECTION_NAME);
      collections.company = companyCollection;
      console.log(`Successfully connected to database: ${db.databaseName} and collection: ${companyCollection.collectionName}`);

            // client
            const accountCollection: mongoDB.Collection = db.collection(process.env.ACCOUNT_COLLECTION_NAME);
            collections.account = accountCollection;
            // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${favoriteCollection.collectionName}`);

                  // autos
      const autosCollection: mongoDB.Collection = db.collection(process.env.AUTOS_COLLECTION_NAME);
      collections.autos = autosCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${favoriteCollection.collectionName}`);


            const paymentsCollection: mongoDB.Collection = db.collection(process.env.PAYMENTS_COLLECTION_NAME);
            collections.payments = paymentsCollection;
            // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);
      
            // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);
            const myPlainCollection: mongoDB.Collection = db.collection(process.env.MYPLAIN_COLLECTION_NAME);
            collections.myPlain = myPlainCollection;
            // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);
      
            const plainsCollection: mongoDB.Collection = db.collection(process.env.PLAINS_COLLECTION_NAME);
            collections.plains = plainsCollection;
            // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);
      
             // Favorite
      const favoriteCollection: mongoDB.Collection = db.collection(process.env.FAVORITE_COLLECTION_NAME);
      collections.favorite = favoriteCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${favoriteCollection.collectionName}`);

      
      // Favorite
      const contactCollection: mongoDB.Collection = db.collection(process.env.CONTACT_COLLECTION_NAME);
      collections.contact = contactCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${favoriteCollection.collectionName}`);
      
      // scheduling
      const schedulingCollection: mongoDB.Collection = db.collection(process.env.SCHEDULING_COLLECTION_NAME);
      collections.scheduling = schedulingCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${favoriteCollection.collectionName}`);
      
      // schedulingEvaluation
      const schedulingEvaluationCollection: mongoDB.Collection = db.collection(process.env.SCHEDULINGEVALUATION_COLLECTION_NAME);
      collections.schedulingEvaluation = schedulingEvaluationCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${favoriteCollection.collectionName}`);

      const clientCompanyCollection: mongoDB.Collection = db.collection(process.env.CLIENTCOMPANY_COLLECTION_NAME);
      collections.clientCompany = clientCompanyCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);

      const guarantorCompanyCollection: mongoDB.Collection = db.collection(process.env.GUARANTORCOMPANY_COLLECTION_NAME);
      collections.guarantorCompany = guarantorCompanyCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);

      const negotiationsCollection: mongoDB.Collection = db.collection(process.env.NEGOTIATIONS_COLLECTION_NAME);
      collections.negotiations = negotiationsCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);
      
      const paymentRentCollection: mongoDB.Collection = db.collection(process.env.PAYMENTRENT_COLLECTION_NAME);
      collections.paymentRent = paymentRentCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);

      const FinancerCollection: mongoDB.Collection = db.collection(process.env.FINANCER_COLLECTION_NAME);
      collections.financer = FinancerCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);

      const bankCollection: mongoDB.Collection = db.collection(process.env.BANK_COLLECTION_NAME);
      collections.bank = bankCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);

      const notificationCollection: mongoDB.Collection = db.collection(process.env.NOTIFICATION_COLLECTION_NAME);
      collections.notification = notificationCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);

      const alertCollection: mongoDB.Collection = db.collection(process.env.ALERT_COLLECTION_NAME);
      collections.alertClient = alertCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${alertCollection.collectionName}`);

      const searchCollection: mongoDB.Collection = db.collection(process.env.SEARCH_COLLECTION_NAME);
      collections.searchClient = searchCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${alertCollection.collectionName}`);

      const accessCollection: mongoDB.Collection = db.collection(process.env.ACCESS_COLLECTION_NAME);
      collections.access = accessCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${accessCollection.collectionName}`);

      const teamCollection: mongoDB.Collection = db.collection(process.env.TEAM_COLLECTION_NAME);
      collections.team = teamCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${brokerCollection.collectionName}`);

      
      const viewAutoCollection: mongoDB.Collection = db.collection(process.env.VIEWAUTO_COLLECTION_NAME);
      collections.viewAuto = viewAutoCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);

      const recuperationCollection: mongoDB.Collection = db.collection(process.env.RECUPERATION_COLLECTION_NAME);
      collections.recuperation = recuperationCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${notificationCollection.collectionName}`);
      

          const messagesRoomsCollection: mongoDB.Collection = db.collection(process.env.MESSAGESROOMS_COLLECTION_NAME);
          collections.messagesRooms = messagesRoomsCollection;
          // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${messagesCollection.collectionName}`);
    

          const roomsCollection: mongoDB.Collection = db.collection(process.env.ROOMS_COLLECTION_NAME);
          collections.rooms = roomsCollection;

          

          const EvaluationCollection: mongoDB.Collection = db.collection(process.env.EVALUATION_COLLECTION_NAME);
          collections.evaluation = EvaluationCollection;

          

          const ticketRentCollection: mongoDB.Collection = db.collection(process.env.TICKETRENT_COLLECTION_NAME);
          collections.ticketRent = ticketRentCollection;

          

          const replyTicketRentCollection: mongoDB.Collection = db.collection(process.env.REPLYTICKETRENT_COLLECTION_NAME);
          collections.replyTicketRent = replyTicketRentCollection;


          const ticketSupportCollection: mongoDB.Collection = db.collection(process.env.TICKETSUPPORT_COLLECTION_NAME);
          collections.ticketSupport = ticketSupportCollection;

          

          const replyTicketSupportCollection: mongoDB.Collection = db.collection(process.env.REPLYTICKETSUPPORT_COLLECTION_NAME);
          collections.replyTicketSupport = replyTicketSupportCollection;

          

          const documentationsCollection: mongoDB.Collection = db.collection(process.env.DOCUMENTATIONS_COLLECTION_NAME);
          collections.documentations = documentationsCollection;

          

          const contractsCollection: mongoDB.Collection = db.collection(process.env.CONTRACTS_COLLECTION_NAME);
          collections.contracts = contractsCollection;

          

          const processNotesCollection: mongoDB.Collection = db.collection(process.env.PROCESSNOTES_COLLECTION_NAME);
          collections.processNotes = processNotesCollection;

          const messageReadDataCollection: mongoDB.Collection = db.collection(process.env.MESSAGEREADDATA_COLLECTION_NAME);
          collections.messageReadData = messageReadDataCollection;

          const roomReadDataCollection: mongoDB.Collection = db.collection(process.env.ROOMREADDATA_COLLECTION_NAME);
          collections.roomReadData = roomReadDataCollection;

          const notificationReadDataCollection: mongoDB.Collection = db.collection(process.env.NOTIFICATIONREADDATA_COLLECTION_NAME);
          collections.notificationReadData = notificationReadDataCollection;

          const waitingListCollection: mongoDB.Collection = db.collection(process.env.WAITINGLIST_COLLECTION_NAME);
          collections.waitingList = waitingListCollection;

          const WebSiteClientCollection: mongoDB.Collection = db.collection(process.env.WEBSITECLIENT_COLLECTION_NAME);
          collections.webSiteClient = WebSiteClientCollection;

          const locatorCompanyCollection: mongoDB.Collection = db.collection(process.env.LOCATORCOMPANY_COLLECTION_NAME);
          collections.locatorCompany = locatorCompanyCollection;

          const autosChargesCollection: mongoDB.Collection = db.collection(process.env.AUTOSCHARGES_COLLECTION_NAME);
          collections.autosCharges = autosChargesCollection;

          const paymentChargesCollection: mongoDB.Collection = db.collection(process.env.PAYMENTCHARGES_COLLECTION_NAME);
          collections.paymentCharges = paymentChargesCollection;

          const inspectionCollection: mongoDB.Collection = db.collection(process.env.INSPECTION_COLLECTION_NAME);
          collections.inspection = inspectionCollection;

          const SquadCollection: mongoDB.Collection = db.collection(process.env.SQUAD_COLLECTION_NAME);
          collections.squad = SquadCollection;

          const LicensingCollection: mongoDB.Collection = db.collection(process.env.LICENSING_COLLECTION_NAME);
          collections.licensing = LicensingCollection;

          const FeaturesCollection: mongoDB.Collection = db.collection(process.env.FEATURES_COLLECTION_NAME);
          collections.features = FeaturesCollection;

          const documentAutoCollection: mongoDB.Collection = db.collection(process.env.DOCUMENTAUTO_COLLECTION_NAME);
          collections.documentAuto = documentAutoCollection;

          const deletedCompanyCollection: mongoDB.Collection = db.collection(process.env.DELETEDCOMPANY_COLLECTION_NAME);
          collections.deletedCompany = deletedCompanyCollection;

          const DeletedClientCollection: mongoDB.Collection = db.collection(process.env.DELETEDCLIENT_COLLECTION_NAME);
          collections.deletedClient = DeletedClientCollection;

          const proposalsCollection: mongoDB.Collection = db.collection(process.env.PROPOSALS_COLLECTION_NAME);
          collections.proposals = proposalsCollection;

          const blogCollection: mongoDB.Collection = db.collection(process.env.BLOG_COLLECTION_NAME);
          collections.blog = blogCollection;

          const schedulingConfigCollection: mongoDB.Collection = db.collection(process.env.SCHEDULINGCONFIG_COLLECTION_NAME);
          collections.schedulingConfig = schedulingConfigCollection;

          const rentAdjustmentCollection: mongoDB.Collection = db.collection(process.env.RENTADJUSTMENT_COLLECTION_NAME);
          collections.rentAdjustment = rentAdjustmentCollection;

      }


