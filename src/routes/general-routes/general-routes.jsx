import { lazy } from "react";
import { Route } from "react-router-dom";

// const NavigationBar = lazy(() => import("../../components/Navigation/NavigationBar"));

import SubPage from '../../pages/landing-pages/sub-landing-page/SubMain';
import ComingSoonPage from "../../components/coming-soon";
// import HardwareProducts from "../../pages/shop-app/HardwareProducts";
// import ContractorProducts from "../../pages/shop-app/ContractorProducts";
// import Professional from "../../pages/customer/customerPortal/professionalPortal/Professional";
// import ProBillSummary from "../../pages/customer/customerPortal/professionalRequisition/ProfRequisitionInvoice ";

const LandingPage = lazy(() => import("../../pages/landing-pages/LandingPage1"));
const CustomerPage = lazy(() => import("../../pages/customer/CustomerPage"));
const CustomerBuilderSide = lazy(() => import("../../pages/customer/CustomerBuilderSide"));
const ContCustomerBuilderSide = lazy(() => import("../../pages/customer/ContCustomerBuilderSide"));
const BuilderViewPastProfJobSpec = lazy(() => import("../../pages/professional/ProfessionalPortal/BuilderViewPastProfJobSpec"));
const BuilderViewProfCustomer = lazy(() => import("../../pages/customer/customerLanding/BuilderViewProfCustomer"));
const BuilderViewProfProjectQuote = lazy(() => import("../../components/BuilderViewProfProjectQuote"));
const BuilderViewProfJobProgress = lazy(() => import("../../pages/admin/BuilderViewProfJobProgress"));


const CustomerAdminSide = lazy(() => import("../../pages/customer/CustomerAdminSide"));
const AdminViewActiveCustomer = lazy(() => import("../../pages/customer/AdminViewActiveCustomer"));
const AdminViewPastContCustomer = lazy(() => import("../../pages/customer/AdminViewPastContCustomer"));
const AdminViewFundiActive = lazy(() => import("../../pages/customer/AdminViewFundiActive"));
const AdminViewPastCustomer = lazy(() => import("../../pages/customer/AdminViewPastCustomer"));

// const fundiLanding = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiLanding"));
const Builders = lazy(() => import("../../components/Builders"));
const BuilderContCustomerSidePast = lazy(() => import("../../components/BuilderContCustomerSidePast"));
const BuildersProfCustomerSide = lazy(() => import("../../components/BuildersProfCustomerSide"));
const BuildersContCustomerSide = lazy(() => import("../../components/BuildersContCustomerSide"));
const BuilderProfCustomerSidePast = lazy(() => import("../../components/BuilderProfCustomerSidePast"));

const CustomerViewPastContJobSpec = lazy(() => import("../../pages/professional/ProfessionalPortal/CustomerViewPastContJobSpec"));
const CustomerViewPastProfJobSpec = lazy(() => import("../../pages/professional/ProfessionalPortal/CustomerViewPastProfJobSpec"));
const CustomerViewPastContProjectQuote = lazy(() => import("../../components/CustomerViewPastContProjectQuote"));
const CustomerViewPastProfProjectQuote = lazy(() => import("../../components/CustomerViewPastProfProjectQuote"));


const AdminViewFundiBuilderActive = lazy(() => import("../../components/AdminViewFundiBuilderActive"));
const AdminViewFundiPastBuilder = lazy(() => import("../../components/AdminViewFundiPastBuilder"));

const ContProjectQuoteFormCustomerSide = lazy(() => import("../../components/ContProjectQuoteFormCustomerSide"));


const BuildersAdminSide = lazy(() => import("../../components/BuilderAdminSide"));
const BuilderAdminContView = lazy(() => import("../../components/BuilderAdminContView"));
const AdminViewPastContBuilder = lazy(() => import("../../components/AdminViewPastContBuilder"));

const ProjectQuoteForm = lazy(() => import("../../components/ProjectQuoteForm"));
const ProjectQuoteFormCustomerSide = lazy(() => import("../../components/ProjectQuoteFormCustomerSide"));
const ProjectQuoteFormProfCustomerSide = lazy(() => import("../../components/ProjectQuoteFormProfCustomerSide"));
const ProfProjectQuoteBuilderActive = lazy(() => import("../../components/ProfProjectQuoteBuilderActive"));
const ContProjectQuoteFormBuilderSide = lazy(() => import("../../components/ContProjectQuoteFormBuilderSide"));


const ProjectQuoteFormCustomerSide1 = lazy(() => import("../../components/ProjectQuoteFormCustomerSide1"));

const ProjectQuoteFormBuilderSide = lazy(() => import("../../components/ProjectQuoteFormBuilderSide"));
const ProjectQuoteFormAdminSide = lazy(() => import("../../components/ProjectQuoteFormAdminSide"));
const AdminContActiveProjectQuote = lazy(() => import("../../components/AdminContActiveProjectQuote"));
const AdminViewContPastProjectQuote = lazy(() => import("../../components/AdminViewContPastProjectQuote"));

const AdminViewFundiQuoteFormActive = lazy(() => import("../../components/AdminViewFundiQuoteFormActive"));
const AdminViewFundiPastProjectQuote = lazy(() => import("../../components/AdminViewFundiPastProjectQuote"));

const ProjectQuoteFormBuilderSide2 = lazy(() => import("../../components/ProjectQuoteFormBuilderSide2"));


const CustomerPortal = lazy(() => import("../../pages/customer/customerPortal/CustomerPortal"));
const Active4 = lazy(() => import("../../pages/customer/customerLanding/Active"));

const Active11 = lazy(() => import("../../pages/customer/customerPortal/professionalPortal/professionalLanding/Active"));
const Quotations5 = lazy(() => import("../../pages/customer/customerLanding/Quotations"));
const Past5 = lazy(() => import("../../pages/customer/customerLanding/Past"));
const Draft4 = lazy(() => import("../../pages/customer/customerLanding/Draft"));
const New1 = lazy(() => import("../../pages/customer/customerPortal/professionalPortal/professionalLanding/New"));
const Draft11 = lazy(() => import("../../pages/customer/customerPortal/professionalPortal/professionalLanding/Draft"));
const Past11 = lazy(() => import("../../pages/customer/customerPortal/professionalPortal/professionalLanding/Past"));
const Quotations11 = lazy(() => import("../../pages/customer/customerPortal/professionalPortal/professionalLanding/Quotations"));



const New12 = lazy(() => import("../../pages/customer/customerPortal/contractor/contractorLanding/New"));
const Draft12 = lazy(() => import("../../pages/customer/customerPortal/contractor/contractorLanding/Draft"));
const Quotations12 = lazy(() => import("../../pages/customer/customerPortal/contractor/contractorLanding/Quotations"));
const Past12 = lazy(() => import("../../pages/customer/customerPortal/contractor/contractorLanding/Past"));
const Active12 = lazy(() => import("../../pages/customer/customerPortal/contractor/contractorLanding/Active"));

const New = lazy(() => import("../../pages/customer/customerLanding/New"));
const CustomerInvoiceDetails = lazy(() => import("../../pages/customer/invoices/InvoiceDetails"));
const CustomerReceipts = lazy(() => import("../../pages/customer/invoices/Invoice"));
const TrackProgress1 = lazy(() => import("../../pages/fundi/fundiPortfolio/TrackProgress"));
const TrackProgress2 = lazy(() => import("../../pages/fundi/fundiPortfolio/TrackProgress2"));




const CustomerProfile = lazy(() => import("../../pages/customer/customerPortal/manageAccount/CustomerProfile"));
const CustomerProfile2 = lazy(() => import("../../pages/customer/customerPortal/manageAccount/CustomerProfile2"));
const CustomerAddress = lazy(() => import("../../pages/customer/customerPortal/manageAccount/CustomerAddress"));
const CustomerAddress2 = lazy(() => import("../../pages/customer/customerPortal/manageAccount/CustomerAddress2"));
const CustomerEditEmail = lazy(() => import("../../pages/customer/customerPortal/manageAccount/EditAccountInfo/EditEmail"));
const CustomerEditCountry = lazy(() => import("../../pages/customer/customerPortal/manageAccount/EditAccountInfo/EditCountry"));
const CustomerEditPhone = lazy(() => import("../../pages/customer/customerPortal/manageAccount/EditAccountInfo/EditPhone"));
const CustomerPassword = lazy(() => import("../../pages/customer/customerPortal/manageAccount/CustomerPassword"));
const CustomerUploads = lazy(() => import("../../pages/customer/customerPortal/manageAccount/CustomerUploads"));
const CustomerUpload2 = lazy(() => import("../../pages/customer/customerPortal/manageAccount/CustomerUpload2"));
const Individual = lazy(() => import("../../pages/customer/verification/Individual"));
const IndividualUploads = lazy(() => import("../../pages/customer/verification/IndividualUploads"));
const IndividualAddress = lazy(() => import("../../pages/customer/verification/IndividualAddress"));
const Organization = lazy(() => import("../../pages/customer/verification/Organization"));
const OrganizationAddress = lazy(() => import("../../pages/customer/verification/OrganizationAddress"));
const OrganizationUploads = lazy(() => import("../../pages/customer/verification/OrganizationUploads"));
const IndiCustomers = lazy(() => import("../../components/IndiCustomers"));
const OrganCustomer = lazy(() => import("../../components/OrganCustomer"));
const AssignOrder = lazy(() => import("../../components/AssignOrder"));
const AssignOrderDesigns = lazy(() => import("../../components/AssignOrderDesigns"));
const AssignedDesignOrder = lazy(() => import("../../components/AssignedDesignOrder"));
const AdminAssignHardwareProducts = lazy(() => import("../../pages/admin/AdminAssignHardwareProducts"));
const AdminAssignHardwareProductsCompetitive = lazy(() => import("../../pages/admin/AdminAssignHardwareProductsCompetitive"));
const AdminAssignMachineryProducts = lazy(() => import("../../pages/admin/AdminAssignMachineryProducts"));
const AdminAssignMachineryRestricted = lazy(() => import("../../pages/admin/AdminAssignMachineryRestricted"));
const AssignedCustomProductOrder = lazy(() => import("../../components/AssignedCustomProductOrder"));


const QuotationEvaluation = lazy(() => import("../../components/QuotationEvaluation"));
const Specification = lazy(() => import("../../pages/admin/EvaluationQuote/Specification"));
const Bids = lazy(() => import("../../pages/admin/EvaluationQuote/Bids"));
const Bidders = lazy(() => import("../../pages/admin/EvaluationQuote/Bidders"));
const Customer = lazy(() => import("../../pages/admin/EvaluationQuote/Customer"));
const Bidders1 = lazy(() => import("../../pages/admin/EvaluationQuote/Bidders1"));
const Bids1 = lazy(() => import("../../pages/admin/EvaluationQuote/Bids1"));
const Specification1 = lazy(() => import("../../pages/contractor/ContractorPortal/AdminViewQuote/JobRequSpecification"));
const Customerss = lazy(() => import("../../pages/contractor/ContractorPortal/AdminViewQuote/CustomerPages"));
const Projectquote = lazy(() => import("../../pages/contractor/ContractorPortal/AdminViewQuote/ContProjectQuoteFormCustomerSide"));




const Unverified = lazy(() => import("../../components/Unverified"));
const FundiRegister = lazy(() => import("../../components/FundiRegister"));
const ProfessionalRegister = lazy(() => import("../../components/ProfessionalRegister"));
const HardwareRegister = lazy(() => import("../../components/HardwareRegister"));
const ContractorRegister = lazy(() => import("../../components/ContractorRegister"));
const Hardwares = lazy(() => import("../../pages/hardware/HardwarePortal/verification/Hardwares"));
const HardwareAddress = lazy(() => import("../../pages/hardware/HardwarePortal/verification/HardwareAddress"));
const HardwareUpload = lazy(() => import("../../pages/hardware/HardwarePortal/verification/HardwareUpload"));
const HardwareProduct = lazy(() => import("../../pages/hardware/HardwarePortal/verification/HardwareProduct"));

const Contractors = lazy(() => import("../../pages/contractor/ContractorPortal/verification/Contractors"));
const ContractorAddress = lazy(() => import("../../pages/contractor/ContractorPortal/verification/ContractorAddress"));
const ContractorUpload = lazy(() => import("../../pages/contractor/ContractorPortal/verification/ContractorUpload"));
const ContractorExperience = lazy(() => import("../../pages/contractor/ContractorPortal/verification/ContractorExperience"));

const Fundis = lazy(() => import('../../pages/fundi/fundiPortfolio/verification/Fundis'));
const FundiUploads = lazy(() => import('../../pages/fundi/fundiPortfolio/verification/FundiUploads'));
const FundiAddress = lazy(() => import('../../pages/fundi/fundiPortfolio/verification/FundiAddress'));
const FundiExperience = lazy(() => import('../../pages/fundi/fundiPortfolio/verification/FundiExperience'));
const FundiProducts = lazy(() => import('../../pages/fundi/fundiPortfolio/verification/FundiProducts'));

const Professionals = lazy(() => import("../../pages/professional/ProfessionalPortal/verification/Professionals"));
const ProfessionalAddress = lazy(() => import("../../pages/professional/ProfessionalPortal/verification/ProfessionalAddress"));
const ProfessionalUploads = lazy(() => import("../../pages/professional/ProfessionalPortal/verification/ProfessionalUploads"));
const ProfessionalExperience = lazy(() => import("../../pages/professional/ProfessionalPortal/verification/ProfessionalExperience"));
const ProfessionalProduct = lazy(() => import("../../pages/professional/ProfessionalPortal/verification/ProfessionalProduct"));
const ProfessionalPortal = lazy(() => import("../../pages/customer/customerPortal/professionalPortal/Professional"));
const Contractor = lazy(() => import("../../pages/customer/customerPortal/contractor/Contractor"));
const Project = lazy(() => import("../../pages/professional/ProfessionalPortal/ManageAccount/Project"));
const ProfessionalDraftJob = lazy(() => import("../../pages/professional/ProfessionalPortal/professionalLanding/professionalDraftJob"));
const ProfDraftJob = lazy(() => import("../../pages/professional/ProfessionalPortal/professionalLanding/ProfDraftJob"));

const Hardware = lazy(() => import("../../pages/customer/customerPortal/hardwarePortal/ShopApp"));
const RequisitionInvoice = lazy(() => import("../../pages/customer/customerPortal/fundiRequisition/RequisitionInvoice"));
const ProfRequisitionInvoice1  = lazy(() => import("../../pages/customer/customerPortal/professionalPortal/professionalQuoteCustomer/ProfRequisitionInvoice "));
const ProfRequisitionInvoice2  = lazy(() => import("../../pages/customer/customerPortal/professionalCustomerQuote/AdminViewQuote/ProfRequisitionInvoice "));
const ProfExpense2  = lazy(() => import("../../pages/customer/customerPortal/professionalPortal/professionalQuoteCustomer/ProfExpense"));

const ProfExpense3  = lazy(() => import("../../pages/customer/customerPortal/professionalCustomerQuote/AdminViewQuote/ProfExpense"));
const WorkPlan2  = lazy(() => import("../../pages/customer/customerPortal/professionalPortal/professionalQuoteCustomer/WorkPlan"));

const WorkPlan4  = lazy(() => import("../../pages/customer/customerPortal/professionalCustomerQuote/AdminViewQuote/WorkPlan"));
const PaymentBreakdown2  = lazy(() => import("../../pages/customer/customerPortal/professionalPortal/professionalQuoteCustomer/PaymentBreakdown"));

const PaymentBreakdown4  = lazy(() => import("../../pages/customer/customerPortal/professionalCustomerQuote/AdminViewQuote/PaymentBreakdown"));
const Submissions2  = lazy(() => import("../../pages/customer/customerPortal/professionalPortal/professionalQuoteCustomer/Submission"));

const Submissions4  = lazy(() => import("../../pages/customer/customerPortal/professionalCustomerQuote/AdminViewQuote/Submission"));
const GrandSummary2  = lazy(() => import("../../pages/customer/customerPortal/professionalPortal/professionalQuoteCustomer/GrandSummary"));
const GrandSummary3  = lazy(() => import("../../pages/customer/customerPortal/professionalCustomerQuote/AdminViewQuote/GrandSummary"));

const ProfRequisitionInvoice  = lazy(() => import("../../pages/customer/customerPortal/professionalRequisition/ProfRequisitionInvoice "));
const ProfExpense  = lazy(() => import("../../pages/customer/customerPortal/professionalRequisition/ProfExpense"));
const WorkPlan  = lazy(() => import("../../pages/customer/customerPortal/professionalRequisition/WorkPlan"));
const PaymentBreakdown  = lazy(() => import("../../pages/customer/customerPortal/professionalRequisition/PaymentBreakdown"));
const Submissions  = lazy(() => import("../../pages/customer/customerPortal/professionalRequisition/Submission"));
const GrandSummary  = lazy(() => import("../../pages/customer/customerPortal/professionalRequisition/GrandSummary"));

const RequisitionInvoice1  = lazy(() => import("../../pages/customer/customerPortal/contractorRequisition/RequisitionInvoice1 "));
const Expense1  = lazy(() => import("../../pages/customer/customerPortal/contractorRequisition/Expense1"));
const WorkPlan1  = lazy(() => import("../../pages/customer/customerPortal/contractorRequisition/WorkPlan1"));
const ProBillSummary  = lazy(() => import("../../pages/customer/customerPortal/contractorRequisition/ProBillSummary"));
const Submissions1  = lazy(() => import("../../pages/customer/customerPortal/contractorRequisition/Submission1"));
const ContJobSpecification  = lazy(() => import("../../pages/customer/customerPortal/contractorRequisition/ContJobSpecification"));
const PaymentBreakdown1  = lazy(() => import("../../pages/customer/customerPortal/contractorRequisition/PaymentBreakdown1"));

const RequisitionInvoice3  = lazy(() => import("../../pages/customer/customerPortal/contractor/contractorCustomerQuote/RequisitionInvoice1 "));
const Expense3  = lazy(() => import("../../pages/customer/customerPortal/contractor/contractorCustomerQuote/Expense1"));
const WorkPlan3  = lazy(() => import("../../pages/customer/customerPortal/contractor/contractorCustomerQuote/WorkPlan1"));
const ProBillSummary3  = lazy(() => import("../../pages/customer/customerPortal/contractor/contractorCustomerQuote/ProBillSummary"));
const Submissions3  = lazy(() => import("../../pages/customer/customerPortal/contractor/contractorCustomerQuote/Submission1"));
const ContJobSpecification3  = lazy(() => import("../../pages/customer/customerPortal/contractor/contractorCustomerQuote/ContJobSpecification"));
const ContJobSpecificationS  = lazy(() => import("../../pages/customer/customerPortal/contractor/contractorCustomerQuote/ContJobSpecificationS"));

const PaymentBreakdown3  = lazy(() => import("../../pages/customer/customerPortal/contractor/contractorCustomerQuote/PaymentBreakdown1"));



// const AllHardwareProducts = lazy(() => import("../../pages/customer/customerPortal/hardwarePortal/hardwareProducts/subCategories/cement/AllHardwareProducts"));
const AccountProfile = lazy(() => import("../../pages/fundi/fundiPortfolio/manageAccount/AccountProfile"));
const EditEmail = lazy(() => import("../../pages/fundi/fundiPortfolio/manageAccount/EditAccountInfo/EditEmail"));
const EditCountry = lazy(() => import("../../pages/fundi/fundiPortfolio/manageAccount/EditAccountInfo/EditCountry"));

const EditPhone = lazy(() => import("../../pages/fundi/fundiPortfolio/manageAccount/EditAccountInfo/EditPhone"));
const EditName = lazy(() => import("../../pages/fundi/fundiPortfolio/manageAccount/EditAccountInfo/EditName"));

// const EditAddress = lazy(() => import("../../pages/fundi/fundiPortfolio/manageAccount/EditAccountInfo/EditAddress"));
const Address = lazy(() => import("../../pages/fundi/fundiPortfolio/manageAccount/Address"));
const UploadAttachments = lazy(() => import("../../pages/fundi/fundiPortfolio/manageAccount/UpLoadAttachments"));
const Experience = lazy(() => import("../../pages/fundi/fundiPortfolio/manageAccount/Experience"));
// const Products = lazy(() => import("../../pages/fundi/fundiPortfolio/manageAccount/Products"));
const FundiPortfolio = lazy(() => import("../../pages/fundi/fundiPortfolio/FundiPortfolio"));
const JobRequestDetails = lazy(() => import("../../pages/fundi/fundiPortfolio/JobRequestDetails"));

const JobRequestDetails2 = lazy(() => import("../../pages/fundi/fundiPortfolio/JobRequestDetails2"));
const JobRequestDetails3 = lazy(() => import("../../pages/fundi/fundiPortfolio/JobRequestDetails3"));

const JobRequDetailsFundi = lazy(() => import("../../pages/fundi/fundiPortfolio/JobRequDetailsFundi"));

const TrackProgress = lazy(() => import("../../pages/fundi/fundiPortfolio/TrackProgress"));
const JobRequDetailsProfessional = lazy(() => import("../../pages/professional/ProfessionalPortal/JobRequDetails"));
const JobRequCustomer = lazy(() => import("../../pages/professional/ProfessionalPortal/JobRequCustomer"));
const JobRequCustomer2 = lazy(() => import("../../pages/professional/ProfessionalPortal/JobReqCustomer2"));
const JobReqProfCustomerActive = lazy(() => import("../../pages/professional/ProfessionalPortal/JobReqProfCustomerActive"));

const JobReqProfBuilderActive = lazy(() => import("../../pages/professional/ProfessionalPortal/JobReqProfBuilderActive"));
const SpecificationBuilder = lazy(() => import("../../pages/fundi/fundiPortfolio/ProfessionalQuoteOrder/Quote"));
const GrandSummaryProf = lazy(() => import("../../pages/fundi/fundiPortfolio/ProfessionalQuoteOrder/JobSpecifications"));
const PaymentBuilderProf = lazy(() => import("../../pages/fundi/fundiPortfolio/ProfessionalQuoteOrder/PaymentFundi"));
const SubmissionsProf = lazy(() => import("../../pages/fundi/fundiPortfolio/ProfessionalQuoteOrder/CustomerFundi"));
const LeadTimeProf = lazy(() => import("../../pages/fundi/fundiPortfolio/ProfessionalQuoteOrder/LeadTime"));
const ProductListProf = lazy(() => import("../../pages/fundi/fundiPortfolio/ProfessionalQuoteOrder/ProductList"));


const SpecificationBuilderCont = lazy(() => import("../../pages/fundi/fundiPortfolio/ContractorQuoteOrder/Quote"));
const GrandSummaryCont = lazy(() => import("../../pages/fundi/fundiPortfolio/ContractorQuoteOrder/JobSpecifications"));
const PaymentBuilderCont = lazy(() => import("../../pages/fundi/fundiPortfolio/ContractorQuoteOrder/PaymentFundi"));
const SubmissionsCont = lazy(() => import("../../pages/fundi/fundiPortfolio/ContractorQuoteOrder/CustomerFundi"));
const LeadTimeCont = lazy(() => import("../../pages/fundi/fundiPortfolio/ContractorQuoteOrder/LeadTime"));
const ProductListCont = lazy(() => import("../../pages/fundi/fundiPortfolio/ContractorQuoteOrder/ProductList"));

const JobReqContCustomerActive = lazy(() => import("../../pages/professional/ProfessionalPortal/JobReqContCustomerActive"));
const JobReqContBuilderActive = lazy(() => import("../../pages/professional/ProfessionalPortal/JobReqContBuilderActive"));


const JobRequCustomer3 = lazy(() => import("../../pages/professional/ProfessionalPortal/JobReqCustomer3"));
const JobRequCustomer4 = lazy(() => import("../../pages/professional/ProfessionalPortal/JobReqCustomer4"));


const JobRequBuilder = lazy(() => import("../../pages/professional/ProfessionalPortal/JobRequBuilder"));
const JobRequCustomer5 = lazy(() => import("../../pages/professional/ProfessionalPortal/JobReqCustomer5"));
const AdminJobRequContActive = lazy(() => import("../../pages/professional/ProfessionalPortal/AdminJobReqContActive"));
const AdminViewPastContJob = lazy(() => import("../../pages/professional/ProfessionalPortal/AdminViewPastContJob"));

const AdminViewFundiJobActive = lazy(() => import("../../pages/professional/ProfessionalPortal/AdminViewFundiJobActive"));
const AdminViewFundiJobAPast = lazy(() => import("../../pages/professional/ProfessionalPortal/AdminViewFundiJobPast"));





const JobRequCustomer1 = lazy(() => import("../../pages/professional/ProfessionalPortal/JobRequCustomer1"));
const JobRequCustomers1 = lazy(() => import("../../pages/professional/ProfessionalPortal/JobReqCustomers1"));

const JobRequSpecification2 = lazy(() => import("../../pages/customer/customerPortal/professionalPortal/professionalQuoteCustomer/JobRequSpecification"));
const JobRequSpecification3 = lazy(() => import("../../pages/customer/customerPortal/professionalCustomerQuote/AdminViewQuote/JobRequSpecification"));
const JobRequSpecification12 = lazy(() => import("../../pages/customer/customerPortal/professionalCustomerQuote/AdminViewQuote/JobReqSpecification12"));
const CustomerPages = lazy(() => import("../../pages/customer/customerPortal/professionalCustomerQuote/AdminViewQuote/CustomerPages"));
const AssignmentProfRegisters = lazy(() => import("../../pages/customer/customerPortal/professionalCustomerQuote/AdminViewQuote/AssignmentProfRegister"));






const JobRequSpecification = lazy(() => import("../../pages/customer/customerPortal/professionalRequisition/JobRequSpecification"));
const CustomerFundi = lazy(() => import("../../pages/fundi/fundiPortfolio/active/CustomerFundi"));
const Fundiquote = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiQuote/Quote"));
const GrandSummarys = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiQuote/GrandSummary"));
const ProductLists = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiQuote/ProductList"));

const Fundiquote1 = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiQuoteCreation/Quote"));
const Fundiquote2 = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiContQuotes/Quote"));
const GrandSummarys2 = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiContQuotes/GrandSummary"));
const ProductLists2 = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiContQuotes/ProductList"));

const JobReqspecification2 = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiContQuotes/JobSpecifications"));
const PaymentFundi2 = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiContQuotes/PaymentFundi"));
const CustomerFundi2 = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiContQuotes/CustomerFundi"));




const GrandSummarys1 = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiQuoteCreation/GrandSummary"));
const ProductLists1 = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiQuoteCreation/ProductList"));

const JobReqspecification = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiQuoteCreation/JobSpecifications"));
const PaymentFundi1 = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiQuoteCreation/PaymentFundi"));
const CustomerFundi1 = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiQuoteCreation/CustomerFundi"));
const HardwareQuote  = lazy(() => import("../../pages/hardware/HardwarePortal/HardwareQuoteBuilder/Quote"));
const HardwareProductList = lazy(() => import("../../pages/hardware/HardwarePortal/HardwareQuoteBuilder/ProductList"));

const HardwareOrderSummary = lazy(() => import("../../pages/hardware/HardwarePortal/HardwareQuoteBuilder/JobSpecifications"));
const HardwarePayment = lazy(() => import("../../pages/hardware/HardwarePortal/HardwareQuoteBuilder/PaymentFundi"));
const HardwareLeadTime = lazy(() => import("../../pages/hardware/HardwarePortal/HardwareQuoteBuilder/LeadTime"));

const HardwareSubmission = lazy(() => import("../../pages/hardware/HardwarePortal/HardwareQuoteBuilder/CustomerFundi"));



const FundiQuote = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiQuoteBuilder/Quote"));
const ProductList = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiQuoteBuilder/ProductList"));
const LeadTime = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiQuoteBuilder/LeadTime"));
const CustomerFundi8 = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiQuoteBuilder/CustomerFundi"));




const FundiJobSpecificationsBuilder = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiQuoteBuilder/JobSpecifications"));

const FundiJobSpecifications = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiQuote/JobSpecifications"));
const FundiPaymentBuilder = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiQuoteBuilder/PaymentFundi"));

const FundiPayment = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiQuote/PaymentFundi"));
const FundiCustomer = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiQuote/CustomerFundi"));


const JobRequDetails3 = lazy(() => import("../../pages/hardware/HardwarePortal/JobRequDetails3"));
const JobRequDetails4 = lazy(() => import("../../pages/contractor/ContractorPortal/JobRequDetails4"));
const JobRequDetails5 = lazy(() => import("../../pages/contractor/ContractorPortal/JobRequDetails5"));
const JobRequDetails6 = lazy(() => import("../../pages/contractor/JobRequDetails6"));



const Quotations = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiLanding/Quotations"));
const Active = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiLanding/Active"));
const Past = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiLanding/Past"));
const Draft = lazy(() => import("../../pages/fundi/fundiPortfolio/fundiLanding/Draft"));
const Quote = lazy(() => import("../../pages/fundi/fundiPortfolio/active/Quote"));
const JobSpecifications = lazy(() => import("../../pages/fundi/fundiPortfolio/active/JobSpecifications"));
const PaymentFundi = lazy(() => import("../../pages/fundi/fundiPortfolio/active/PaymentFundi"));


const ProfessionalPortfolio = lazy(() => import("../../pages/professional/ProfessionalPortal/ProfessionalPortfolio"));
const Quotations3 = lazy(() => import("../../pages/professional/ProfessionalPortal/professionalLanding/Quotations1"));
const Active3 = lazy(() => import("../../pages/professional/ProfessionalPortal/professionalLanding/Active"));
const Past3 = lazy(() => import("../../pages/professional/ProfessionalPortal/professionalLanding/Past"));
const Draft3 = lazy(() => import("../../pages/professional/ProfessionalPortal/professionalLanding/Draft"));
const Account2 = lazy(() => import("../../pages/professional/ProfessionalPortal/ManageAccount/Account2"));    
const Experience2 = lazy(() => import("../../pages/professional/ProfessionalPortal/ManageAccount/Experience2"));
const Address2 = lazy(() => import("../../pages/professional/ProfessionalPortal/ManageAccount/Address2"));
const ProfessionalProducts = lazy(() => import("../../pages/shop-app/ProfessionalProducts"));
const Uploads2 = lazy(() => import("../../pages/professional/ProfessionalPortal/ManageAccount/Uploads2"));
const EditEmail2 = lazy(() => import("../../pages/professional/ProfessionalPortal/ManageAccount/EditAccountInfo/EditEmail"));
const EditPhone2 = lazy(() => import("../../pages/professional/ProfessionalPortal/ManageAccount/EditAccountInfo/EditPhone2"));
// const EditAddress2 = lazy(() => import("../../pages/professional/ProfessionalPortal/ManageAccount/EditAccountInfo/EditAddress2"));

// const EditAddress2 = lazy(() => import("../../pages/hardware/HardwarePortal/manageAccount/EditAccountInfo/EditAddress2"));
const HardwarePortfolio = lazy(() => import("../../pages/hardware/HardwarePortal/HardwarePortfolio"));
const Account3 = lazy(() => import("../../pages/hardware/HardwarePortal/manageAccount/Account3"));
const Experience3 = lazy(() => import("../../pages/hardware/HardwarePortal/manageAccount/Experience3"));
const HardwareProducts = lazy(() => import("../../pages/shop-app/HardwareProducts"));
const Uploads3 = lazy(() => import("../../pages/hardware/HardwarePortal/manageAccount/Uploads3"));
const Address3 = lazy(() => import("../../pages/hardware/HardwarePortal/manageAccount/Address3"));
const EditEmail3 = lazy(() => import("../../pages/hardware/HardwarePortal/manageAccount/EditAccountInfo/EditEmail"));
const EditPhone3 = lazy(() => import("../../pages/hardware/HardwarePortal/manageAccount/EditAccountInfo/EditPhone"));
const EditOrganization = lazy(() => import("../../pages/hardware/HardwarePortal/manageAccount/EditAccountInfo/EditOrganization"));
const EditContactPerson = lazy(() => import("../../pages/hardware/HardwarePortal/manageAccount/EditAccountInfo/EditContactPerson"));

const EditCategory = lazy(() => import("../../pages/hardware/HardwarePortal/manageAccount/EditAccountInfo/EditCategory"));
const Quotations2 = lazy(() => import("../../pages/hardware/HardwarePortal/hardwareLanding/Quotations1"));
const Active2 = lazy(() => import("../../pages/hardware/HardwarePortal/hardwareLanding/Active"));
const Past2 = lazy(() => import("../../pages/hardware/HardwarePortal/hardwareLanding/Past"));
const Draft2 = lazy(() => import("../../pages/hardware/HardwarePortal/hardwareLanding/Draft"));

const ContractorDraftJob = lazy(() => import("../../pages/customer/customerPortal/contractor/contractorLanding/ContractorDraftJob"));
const ContDraftJob = lazy(() => import("../../pages/customer/customerPortal/contractor/contractorLanding/ContDraftJob"));

const ContractorPortfolio = lazy(() => import("../../pages/contractor/ContractorPortal/ContractorPortfolio"));
const Account4 = lazy(() => import("../../pages/contractor/ContractorPortal/manageAccount/Account4"));
const Address4 = lazy(() => import("../../pages/contractor/ContractorPortal/manageAccount/Address4"));
const Experience4 = lazy(() => import("../../pages/contractor/ContractorPortal/manageAccount/Experience4"));
const AdminProducts = lazy(() => import("../../pages/admin/AdminProducts"));
const ContractorProducts = lazy(() => import("../../pages/shop-app/ContractorProducts"));
const Uploads4 = lazy(() => import("../../pages/contractor/ContractorPortal/manageAccount/Uploads4"));
const EditEmail4 = lazy(() => import("../../pages/contractor/ContractorPortal/manageAccount/EditAccountInfo/EditEmail"));
const EditPhone4 = lazy(() => import("../../pages/contractor/ContractorPortal/manageAccount/EditAccountInfo/EditPhone"));
const EditAddress4 = lazy(() => import("../../pages/contractor/ContractorPortal/manageAccount/EditAccountInfo/EditAddress4"));
const Quotations1 = lazy(() => import("../../pages/contractor/ContractorPortal/contractorLanding/Quotations1"));
const Active1 = lazy(() => import("../../pages/contractor/ContractorPortal/contractorLanding/Active"));
const Past1 = lazy(() => import("../../pages/contractor/ContractorPortal/contractorLanding/Past"));
const Draft1 = lazy(() => import("../../pages/contractor/ContractorPortal/contractorLanding/Draft"));
const AssignmentRegister = lazy(() => import("../../components/AssignmentRegister"));
const AssignmentProfRegister = lazy(() => import("../../components/AssignmentProfRegister"));
const AssignmentContRegister = lazy(() => import("../../components/AssignmentContRegister"));



const AssignmentRegister2 = lazy(() => import("../../components/AssignmentRegister2"));
const ContractorBid1 = lazy(() => import("../../pages/customer/customerPortal/contractor/contractorCustomerQuote/ContractorBid1"));
const ContractorBid = lazy(() => import("../../pages/customer/customerPortal/contractor/contractorCustomerQuote/ContractorBid"));


const CustomerViewBid = lazy(() => import("../../pages/customer/customerPortal/professionalCustomerQuote/CustomerBid"));
const EvaluationTable = lazy(() => import("../../pages/customer/customerPortal/professionalCustomerQuote/AdminViewQuote/EvaluationTable"));

const CustomerGrandSummary = lazy(() => import("../../pages/customer/customerPortal/professionalCustomerQuote/CustomerSpecification"));
const CustomerSpecification = lazy(() => import("../../pages/customer/customerPortal/professionalCustomerQuote/GrandSummary"));
const FundRequest = lazy(() => import("../../pages/customer/customerPortal/professionalCustomerQuote/fundRequest"));
const CustomerDraftJob = lazy(() => import("../../pages/customer/customerLanding/customerDraftJob")); 




// const requisitionInvoice = lazy(() => import("../../pages/customer/customerPortal/professionalPortal/professionalrequisition/requisitionInvoice"));


const generalRoutes = [
  // <Route path="/" element={<NavigationBar />} key="navigationbar" />,

  <Route path="/" element={<LandingPage />} key="landingpage" />,
 


 


  <Route path="/quoteform" element={<ProjectQuoteForm />} key="quoteform"/>,
  


  




  <Route path="/customer/past/quoteform" element={<ProjectQuoteFormCustomerSide1 />} key="quoteform"/>,
  <Route path="/customer/quoteform" element={<ProjectQuoteFormCustomerSide />} key="quoteform"/>,
  <Route path="/customer-prof/quoteform" element={<ProjectQuoteFormProfCustomerSide />} key="quoteform"/>,
  <Route path="/customer-new-job-under-review" element={<JobRequestDetails2 />}  key="jobRequestDetails"/>,
  <Route path="/customer-new-job-unreviewed" element={<JobRequestDetails3 />}  key="jobRequestDetails"/>,
  <Route path="/customer-view-past-job-specification" element={<JobRequCustomer3 />} key="Professional"/>,
 <Route path="/customer-view-builders" element={<Builders />} key="builders"/>,
  <Route path="/customer-view-cont-past-builders" element={<BuilderContCustomerSidePast />} key="builders"/>,
  <Route path="/customer-bid-job" element={<JobRequestDetails2 />}  key="jobRequestDetails"/>,
  <Route path="/customer" element={<CustomerPortal />} key="customerportal"/>,
  <Route path="/customer/quotations" element={<Quotations5 />} key="fundiquotations"/>,
  <Route path="/customer/new" element={<New />} key="fundinew"/>,
  <Route path="/customer/draft1" element={<Draft11 />} key="profdraft1"/>,
  <Route path="/customer/quotations1" element={<Quotations11 />} key="profquotations1"/>,
  <Route path="/customer/past1" element={<Past11 />} key="profpast1"/>,
 <Route path="/customer-view-quote" element={<Quote />} key="quote"/>,
  <Route path="/customer-view-order-summary" element={<JobSpecifications />} key="jobspecifications"/>,
  <Route path="/customer-view-payment-breakdown" element={<PaymentFundi />} key="paymentfundi"/>,
  <Route path="/customer-view-attachments" element={<CustomerFundi />} key="customerfundi"/>,
  
  <Route path="/customer-portal/Quote" element={<Fundiquote />} key="fundiquote"/>,
  <Route path="/customer-portal/grand-summary" element={<GrandSummarys />} key="fundiquote"/>,
  <Route path="/customer-portal/product-list" element={<ProductLists />} key="fundiquote"/>,
  <Route path="/customer-view-cont-quote-job-spec" element={<ContJobSpecification3 />} key="Professional"/>,

  <Route path="/customer-portal/Quote1" element={<Fundiquote1 />} key="fundiquote"/>,
  <Route path="/customer-portal/Quote2" element={<Fundiquote2 />} key="fundiquote"/>,
  <Route path="/customer-portal/grand-summary2" element={<GrandSummarys2 />} key="fundiquote"/>,
  <Route path="/customer-portal/product-list2" element={<ProductLists2 />} key="fundiquote"/>,
  <Route path="/customer-portal/order-summary2" element={<JobReqspecification2 />} key="fundiquote"/>,
  <Route path="/customer-portal/payment-breakdown2" element={<PaymentFundi2 />} key="fundiquote"/>,
  <Route path="/customer-portal/submissions2" element={<CustomerFundi2 />} key="fundiquote"/>,
  <Route path="/customer-view-cont-draft-job" element={<ContractorDraftJob />} key="Professional"/>,
  <Route path="/customer-portal/grand-summary1" element={<GrandSummarys1 />} key="fundiquote"/>,

  <Route path="/customer-portal/productlist1" element={<ProductLists1 />} key="fundiquote"/>,
  <Route path="/customer-portal/order-summary1" element={<JobReqspecification />} key="fundiquote"/>,

  <Route path="/customer-portal/payment-breakdown1" element={<PaymentFundi1 />} key="fundiquote"/>,


  <Route path="/customer/new2" element={<New12 />} key="fundinew"/>,
  <Route path="/customer/draft2" element={<Draft12 />} key="profdraft1"/>,
  <Route path="/customer/quotations2" element={<Quotations12 />} key="profquotations1"/>,
  <Route path="/customer/past2" element={<Past12 />} key="profpast1"/>,
  <Route path="/customer/new1" element={<New1 />} key="profnew"/>,
  <Route path="/customer/active2" element={<Active12 />} key="profnew"/>,

  <Route path="/customer/active11" element={<Active11 />} key="profactive"/>,
 <Route path="/customer-view-prof-builders" element={<BuildersProfCustomerSide />} key="builders"/>,
  <Route path="/customer-view-prof-past-builders" element={<BuilderProfCustomerSidePast />} key="builders"/>,

  <Route path="/customer-view-cont-builders" element={<BuildersContCustomerSide />} key="builders"/>,
  <Route path="/customer-view-past-cont-jobspecification" element={<CustomerViewPastContJobSpec />} key="builders"/>,
  <Route path="/customer-view-past-prof-jobspecification" element={<CustomerViewPastProfJobSpec />} key="builders"/>,

  <Route path="/custome-view-past-cont/job/quoteform" element={<CustomerViewPastContProjectQuote />} key="builders"/>,
  <Route path="/customer-view-past-prof-projectquote" element={<CustomerViewPastProfProjectQuote />} key="builders"/>,
<Route path="/customer-portal/order-summary" element={<FundiJobSpecifications />} key="fundiJobSpecifications"/>,
  <Route path="/customer-portal/payment-breakdown" element={<FundiPayment />} key="fundipayment"/>,


  <Route path="/customer-cont/quoteform" element={<ContProjectQuoteFormCustomerSide />} key="builders"/>,

  <Route path="/customer/active" element={<Active4 />} key="fundiactive"/>,
  <Route path="/customer/past" element={<Past5 />} key="fundipast"/>,
  <Route path="/customer/draft" element={<Draft4 />} key="fundidraft"/>,
  <Route path="/customer/customer/fundi-requisition-invoice" element={<RequisitionInvoice />} key="requisitioninvoice"/>,
  <Route path="/customer/manage-account" element={<CustomerProfile />} key="customerprofile"/>,
  <Route path="/customer/manage-account2" element={<CustomerProfile2 />} key="customerprofile2"/>,
  <Route path="/customer/uploads" element={<CustomerUploads />} key="customeruploads"/>,
  <Route path="/customer/upload2" element={<CustomerUpload2 />} key="customerupload2"/>,
  <Route path="/customer/address" element={<CustomerAddress />} key="customeraddress"/>,
  <Route path="/customer/address2" element={<CustomerAddress2 />} key="customeraddress2"/>,
  <Route path="/customer/edit-email" element={<CustomerEditEmail />} key="customereditemail"/>,
  <Route path="/customer/edit-name" element={<EditName />} key="customereditname"/>,
  <Route path="/customer-portal/submissions1" element={<CustomerFundi1 />} key="fundiquote"/>,

  <Route path="/customer/edit-country" element={<CustomerEditCountry />} key="customereditphone"/>,
  <Route path="/customer/edit-phone" element={<CustomerEditPhone />} key="customereditphone"/>,
  <Route path="/customer/security" element={<CustomerPassword />} key="customerpassword"/>,
  <Route path="customer/professional-requisition-invoice" element={<ProfRequisitionInvoice />} key="profRequisitionInvoice"/>,
  <Route path="/unverified" element={<Unverified />} key="unverified"/>,
  <Route path="/individual" element={<IndiCustomers />} key="indicustomers"/>,
  <Route path="/organization" element={<OrganCustomer />} key="organcustomer"/>,
  <Route path="/individual/individual-verification" element={<Individual />} key="individual"/>,
  <Route path="/individual/individual-verification/individual-address" element={<IndividualAddress />} key="individualaddress"/>,
  <Route path="/individual/individual-uploads" element={<IndividualUploads/>} key="individualuploads"/>,
  <Route path="/organization/organization-verification/organization-address" element={<OrganizationAddress />} key="organizationaddress"/>,
  <Route path="/organization/organization-verification/organization-uploads" element={<OrganizationUploads/>} key="organizationuploads"/>,
  <Route path="/organization/organization-verification" element={<Organization />} key="organization"/>,
  <Route path="/assignment/professional" element={<AssignmentProfRegister />} key="assignmentregister"/>,
  <Route path="/assignment/contractors" element={<AssignmentContRegister />} key="assignmentregister"/>,

  <Route path="/assignment" element={<AssignmentRegister />} key="assignmentregister"/>,

  <Route path="/assignment2" element={<AssignmentRegister2 />} key="assignmentregister2"/>,
  <Route path="/customer/invoice/details" element={<CustomerInvoiceDetails />} key="customerInvoiceDetails"/>,
  <Route path="/customer/receipts" element={<CustomerReceipts />} key="customerReceipts"/>,
  <Route path="/customer-view-bid" element={<CustomerViewBid />} key="customerViewBid"/>,
  <Route path="/admin-view-bid" element={<EvaluationTable />} key="customerViewBid"/>,

  <Route path="/customer-view-job-specification" element={<CustomerGrandSummary />} key="customerViewBid"/>,
  <Route path="/customer-view-grand-summary" element={<CustomerSpecification />} key="customerViewBid"/>,
  <Route path="/customer-view-fund-request" element={<FundRequest />} key="customerViewBid"/>,
  <Route path="/customer-draft-job" element={<CustomerDraftJob />} key="customerViewBid"/>,
  <Route path="/customer-view-contractor-bid" element={<ContractorBid />} key="customerViewBid"/>,
  <Route path="/contractor-view-bid" element={<ContractorBid1 />} key="customerViewBid"/>,
  






  <Route path="/fundi-portal/account-info" element={<AccountProfile />} key="accountprofile"/>,
  <Route path="/fundi-portal/account-info/edit-email" element={<EditEmail />} key="editemail"/>,
  <Route path="/fundi-portal/account-info/edit-phone" element={<EditPhone />} key="editphone"/>,
  <Route path="/fundi-portal/account-info/edit-name" element={<EditName />} key="editphone"/>,
  <Route path="/fundi-view-customers" element={<CustomerPage />} key="customers"/>,
  <Route path="/fundi/past/quoteform" element={<ProjectQuoteFormBuilderSide2 />} key="quoteform"/>,
  <Route path="/fundi/edit-country" element={<EditCountry />} key="fundieditphone"/>,
  // <Route path="/fundi-portal/account-info/edit-address" element={<EditAddress />} key="editaddress"/>,
  <Route path="/fundi-portal/address" element={<Address />} key="address" />,
  <Route path="/fundi-portal/account-uploads" element={<UploadAttachments />} key="uploadattachments"/>,
  <Route path="/fundi-portal/experience" element={<Experience />} key="experience"/>,
  // <Route path="/fundi-portal/products" element={<Products />} key="products"/>,
  <Route path="/fundi-portal" element={<FundiPortfolio />} key="fundiportfolio"/>,
  <Route path="/fundi-portal/quotations" element={<Quotations />} key="fundiquotations"/>,
  <Route path="/fundi-portal/active" element={<Active />} key="fundiactive"/>,
  <Route path="/fundi-portal/active/progress" element={<TrackProgress1 />} key="trackProgress1"/>,
  <Route path="/fundi-portal/past/progress" element={<TrackProgress2 />} key="trackProgress1"/>,

  
  <Route path="/fundi-portal/past" element={<Past />} key="fundipast"/>,
  <Route path="/fundi-portal/draft" element={<Draft />} key="fundidraft"/>,
  <Route path="/fundi-register" element={<FundiRegister />} key="fundiregister"/>,
  <Route path="/fundi/fundi-verification" element={<Fundis />} key="fundis"/>,
  <Route path="/fundi/fundi-verification/fundi-address" element={<FundiAddress />} key="fundiaddress"/>,
  <Route path="/fundi/fundi-uploads" element={<FundiUploads/>} key="fundiuploads"/>,
  <Route path="/fundi/fundi-experience" element={<FundiExperience/>} key="fundiexperience"/>,
  <Route path="/fundi/fundi-products" element={<FundiProducts/>} key="fundiproducts"/>,
  <Route path="/fundi-portal/job-request" element={<JobRequestDetails />}  key="jobRequestDetails"/>,
  <Route path="/fundi-portal/job-request/progress" element={<TrackProgress />} key="trackProgress"/>,
 

  <Route path="/fundi-quote-job" element={<JobRequDetailsFundi />}  key="jobRequestDetails"/>,

  

  <Route path="/hardware-portal/quote/builder" element={<HardwareQuote />} key="fundiquote"/>,
  <Route path="/hardware-portal/order-summary" element={<HardwareOrderSummary />} key="fundiquote"/>,

  <Route path="/hardware-portal/productlist" element={<HardwareProductList />} key="fundiquote"/>,
  <Route path="/hardware-portal/payment-builder" element={<HardwarePayment />} key="fundiquote"/>,
  
  <Route path="/hardware-portal/leadtime" element={<HardwareLeadTime />} key="fundiquote"/>,
  <Route path="/hardware-portal/submission-details" element={<HardwareSubmission />} key="fundiquote"/>,

  

  <Route path="/fundi-portal/quote/builder" element={<FundiQuote />} key="fundiquote"/>,
  <Route path="/fundi-portal/productlist" element={<ProductList />} key="fundiquote"/>,
  <Route path="/fundi-portal/leadtime" element={<LeadTime />} key="fundiquote"/>,
  <Route path="/fundi-portal/submission-details" element={<CustomerFundi8 />} key="fundiquote"/>,
  <Route path="/fundi-view-past-job-specification" element={<JobRequCustomer4 />} key="Professional"/>,


  <Route path="/fundi-portal/order-summary" element={<FundiJobSpecificationsBuilder />} key="fundiJobSpecifications"/>,

  
  
  <Route path="/fundi-portal/payment-builder" element={<FundiPaymentBuilder />} key="fundipayment"/>,
  <Route path="/customer-portal/submissions" element={<FundiCustomer />} key="fundicustomer"/>,


  // <Route path="/fundi-portal/fundi-landing" element={<fundiLanding />} key="fundilanding"/>,
  <Route path="/professional-portal" element={<ProfessionalPortfolio />} key="professionalportfolio"/>, 
  <Route path="/professional-portal/job-request" element={<JobRequestDetails />} key="jobrequestDetails"/>, 
  <Route path="/professional" element={<CustomerPortal />} key="customerportal"/>,

  <Route path="/customer/request-professional" element={<ProfessionalPortal />} key="professionalportal"/>,
  <Route path="/professional-portal/quotations" element={<Quotations3 />} key="professionalquotations"/>,
  <Route path="/professional-portal/new" element={<New />} key="professionalactive"/>,
  <Route path="/professional-portal/active" element={<Active3 />} key="professionalactive"/>,
  <Route path="/professional-portal/past" element={<Past3 />} key="professionalpast"/>,
  <Route path="/professional-portal/draft" element={<Draft3 />} key="professionaldraft"/>,
  <Route path="/professionalPortal/account-info" element={<Account2 />} key="account2"/>,
  <Route path="/professional/professional-experience" element={<Experience2 />} key="experience2" />,
  <Route path="/professional/professional-address" element={<Address2 />} key="address2"/>,
  <Route path="/professional/professional-products" element={<ProfessionalProducts />} key="professional-products"/>,
  <Route path="/professional/professional-uploads" element={<Uploads2 />} key="uploads2"/>,
  <Route path="/professionalPortal/account-info/edit-email" element={<EditEmail2 />} key="editemail"/>,
  <Route path="/professionalPortal/account-info/edit-phone" element={<EditPhone2 />} key="editphone"/>,
  <Route path="/professionalPortal/account-info/edit-name" element={<EditName />} key="editaddress"/>,
  <Route path="/professional-register" element={<ProfessionalRegister />} key="professionalregister"/>,
  <Route path="/professional/professional-verification" element={<Professionals />} key="Professional"/>,
  <Route path="/professional/professional-verification/professional-address" element={<ProfessionalAddress />} key="professionaladdress"/>,
  <Route path="/professional/professional-experiences" element={<ProfessionalExperience/>} key="professionalexperience"/>,
  <Route path="/professional/professional-upload" element={<ProfessionalUploads/>} key="professionaluploads"/>,
  <Route path="/professional/professional-product" element={<ProfessionalProduct />} key="product"/>,
  <Route path="/professional/edit-country" element={<EditCountry />} key="professionaleditphone"/>,
  <Route path="/professional-portal/active" element={<JobRequDetailsProfessional />} key="Professional"/>,
  <Route path="/professional-portal/job-customer" element={<JobRequCustomer />} key="Professional"/>,
  <Route path="/customer-view-active-job-specification" element={<JobRequCustomer2 />} key="Professional"/>,
  <Route path="/customer-view-active-prof-job-specification" element={<JobReqProfCustomerActive />} key="Professional"/>,
  <Route path="/customer-view-active-cont-job-specification" element={<JobReqContCustomerActive />} key="Professional"/>,
  <Route path="/professional-view-active-job-specification" element={<JobReqProfBuilderActive />} key="Professional"/>,
  <Route path="/contractor-view-active-job-specification" element={<JobReqContBuilderActive />} key="Professional"/>,
  <Route path="/prof-portal/quote/builder" element={<SpecificationBuilder />} key="Professional"/>,
  <Route path="/prof-portal/order-summary" element={<GrandSummaryProf />} key="Professional"/>,
  <Route path="/prof-portal/productlist" element={<ProductListProf />} key="Professional"/>,
  <Route path="/prof-portal/payment-builder" element={<PaymentBuilderProf />} key="Professional"/>,
  <Route path="/prof-portal/leadtime" element={<LeadTimeProf />} key="Professional"/>,
  <Route path="/prof-portal/submission-details" element={<SubmissionsProf />} key="Professional"/>,
 <Route path="/professional-view-customer" element={<CustomerBuilderSide />} key="customers"/>,
  <Route path="/professional-view-past-jobspecification" element={<BuilderViewPastProfJobSpec />} key="customers"/>,
  <Route path="/professional-view-past-customer" element={<BuilderViewProfCustomer />} key="customers"/>,
  <Route path="/professional-view-past-prof-projectquote" element={<BuilderViewProfProjectQuote />} key="customers"/>,
  <Route path="/professional-view-past-prof-progress" element={<BuilderViewProfJobProgress />} key="customers"/>,
  <Route path="/professional-job/quoteform" element={<ProfProjectQuoteBuilderActive />} key="quoteform"/>,



  <Route path="/fundi-view-active-job-specification" element={<JobRequBuilder />} key="Professional"/>,
  <Route path="/admin-view-active-job-specification" element={<JobRequCustomer5 />} key="Professional"/>,
  <Route path="/admin-view-cont-active-job-specification" element={<AdminJobRequContActive />} key="Professional"/>,
  <Route path="/admin-view-cont-past-job-specification" element={<AdminViewPastContJob />} key="Professional"/>,
  <Route path="/admin-view-fundi-active-job-specification" element={<AdminViewFundiJobActive />} key="Professional"/>,
  <Route path="/admin-view-fundi-past-job-specification" element={<AdminViewFundiJobAPast />} key="Professional"/>,



  
  <Route path="/customer-view-new-prof-job" element={<JobRequCustomer1 />} key="Professional"/>,
  <Route path="/customer-view-new-prof-unreviewed-job" element={<JobRequCustomers1 />} key="Professional"/>,

  <Route path="/customer-view-bid-prof-job" element={<JobRequCustomer1 />} key="Professional"/>,

  <Route path="/customer-view-draft-prof-job" element={<ProfessionalDraftJob />} key="Professional"/>,
  <Route path="/professional-view-draft-prof-job" element={<ProfDraftJob />} key="Professional"/>,
  <Route path="/admin-view-professional-draft-job" element={<ProfDraftJob />} key="Professional"/>,




  <Route path="/professionalPortal/project-details" element={<Project/>} key="project"/> ,
  <Route path="/professional-quote-creation2" element={<ProfRequisitionInvoice1/>} key="project"/> ,
  <Route path="/admin-quote-creation2" element={<ProfRequisitionInvoice2/>} key="project"/> ,

  <Route path="/professional-expense2" element={<ProfExpense2/>} key="project"/> ,
  <Route path="/admin-expense2" element={<ProfExpense3/>} key="project"/> ,

  <Route path="/professional-workplan2" element={<WorkPlan2/>} key="project"/> ,
  <Route path="/admin-workplan2" element={<WorkPlan4/>} key="project"/> ,

  <Route path="/professional-payment-breakdown2" element={<PaymentBreakdown2/>} key="project"/> ,
  <Route path="/admin-payment-breakdown2" element={<PaymentBreakdown4/>} key="project"/> ,

  <Route path="/professional-submissions2" element={<Submissions2/>} key="project"/> ,
  
  <Route path="/admin-submissions2" element={<Submissions4/>} key="project"/> ,
  <Route path="/professional-grand-summary2" element={<GrandSummary2/>} key="project"/> ,
  <Route path="/admin-grand-summary2" element={<GrandSummary3/>} key="project"/> ,

  <Route path="/professional-portal/jobSpecification2" element={<JobRequSpecification2 />} key="Professional"/>,
  <Route path="/admin-portal/jobSpecification2" element={<JobRequSpecification3 />} key="Professional"/>,
  <Route path="/admin-portal/jobSpecifications" element={<JobRequSpecification12 />} key="Professional"/>,
  <Route path="/admin-portal/customer" element={<CustomerPages />} key="Professional"/>,
  <Route path="/admin-view-bidders" element={<AssignmentProfRegisters />} key="Professional"/>,




  
  <Route path="/professional-quote-creation" element={<ProfRequisitionInvoice/>} key="project"/> ,
  <Route path="/professional-expense" element={<ProfExpense/>} key="project"/> ,
  <Route path="/professional-workplan" element={<WorkPlan/>} key="project"/> ,
  <Route path="/professional-payment-breakdown" element={<PaymentBreakdown/>} key="project"/> ,
  <Route path="/professional-submissions" element={<Submissions/>} key="project"/> ,
  <Route path="/professional-portal/jobSpecification" element={<JobRequSpecification />} key="Professional"/>,
  <Route path="/professional-grand-summary" element={<GrandSummary/>} key="project"/> ,






  <Route path="/hardwarePortal/account-info" element={<Account3 />} key="account3"/>,
  <Route path="/hardwarePortal/experience" element={<Experience3 />} key="experience3" />,
  <Route path="/hardwarePortal/products" element={<HardwareProducts />} key="hardware-products"/>,
  <Route path="/hardwarePortal/address"  element={<Address3 />} key="address3"/>,
  <Route path="/hardwarePortal/uploads"  element={<Uploads3 />} key="uploads3"/>,
  <Route path="/hardwarePortal/account-info/edit-email" element={<EditEmail3 />} key="editemail"/>,
  <Route path="/hardwarePortal/account-info/edit-phone" element={<EditPhone3 />} key="editphone"/>,
  <Route path="/hardwarePortal/account-info/edit-category" element={<EditCategory />} key="editaddress"/>,
  <Route path="/hardwarePortal/account-info/edit-organization" element={<EditOrganization />} key="editorganization"/>,
  <Route path="/hardwarePortal/account-info/edit-contactPerson" element={<EditContactPerson />} key="editcontactperson"/>,
  <Route path="/hardware-portal" element={<HardwarePortfolio />} key="hardwareportfolio"/>,  
  <Route path="/hardware-portal/quotations" element={<Quotations2 />} key="hardwarequotations"/>,
  <Route path="/hardware-portal/active" element={<Active2 />} key="hardwareactive"/>,
  <Route path="/hardware-portal/past" element={<Past2 />} key="hardwarepast"/>,
  <Route path="/hardware-portal/draft" element={<Draft2 />} key="hardwaredraft"/>,
  <Route path="/hardware-register" element={<HardwareRegister />} key="hardwareregister"/>,
  <Route path="/hardware/hardware-verification" element={<Hardwares />} key="Hardware"/>,
  <Route path="/hardware/edit-country" element={<EditCountry />} key="hardwareeditphone"/>,
  <Route path="/hardware/hardware-verification/hardware-address" element={<HardwareAddress />} key="Hardware"/>,
  <Route path="/hardware/hardware-upload" element={<HardwareUpload />} key="Hardware"/>,
  <Route path="/hardware/hardware-product" element={<HardwareProduct />} key="Hardware"/>,
  <Route path="/customer/hardware_shop" element={<Hardware />} key="hardwareportal"/>,
  // <Route path="/hardware_shop" element={<Hardware />} key="hardwareportal"/>,
  // <Route path="/hardware_shop/hardware-products" element={<AllProductsCate />} key="allproductscate"/>,
  <Route path="/products" element={<AdminProducts />} key="products" />,
  <Route path="/hardware-portal/job-request3" element={<JobRequDetails3 />} key="jobrequestDetails"/>, 
   


  <Route path="/customer/request-contractor" element={<Contractor />} key="contractorportal"/>,
  <Route path="/contractor-portal" element={<ContractorPortfolio />} key="contractorportfolio"/>, 
 
  <Route path="/contractor-portal/job-request" element={<JobRequDetails4 />} key="contractorportfolio"/>,  
  <Route path="/customer-view-cont-new-job" element={<JobRequDetails5 />} key="contractorportfolio"/>, 
  <Route path="/customer-view-cont-new-job-unreviewed" element={<JobRequDetails6 />} key="contractorportfolio"/>, 

  <Route path="/customer-view-cont-bid-job" element={<JobRequDetails5 />} key="contractorportfolio"/>,  

  <Route path="/contractor-portal/quotations" element={<Quotations1 />} key="contractorquotations"/>,
  <Route path="/contractor-portal/new" element={<Quotations1 />} key="contractorquotations"/>,
  <Route path="/contractor-view-customer" element={<ContCustomerBuilderSide />} key="customers"/>,

  <Route path="/contractor-portal/active" element={<Active1 />} key="contractoractive"/>,
  <Route path="/contractor-portal/past" element={<Past1 />} key="contractorpast"/>,
  <Route path="/contractor-portal/draft" element={<Draft1 />} key="contractordraft"/>,
  <Route path="/contractorPortal/account-info" element={<Account4 />} key="account4"/>,
  <Route path="/contractorPortal/address" element={<Address4 />} key="address4"/>,
  <Route path="/contractorPortal/experience" element={<Experience4 />} key="experience3"/>,
  <Route path="/contractorPortal/products" element={<ContractorProducts />} key="contractor-products"/>,
  <Route path="/contractorPortal/uploads" element={<Uploads4 />} key="uploads4"/>,
  <Route path="/contractorPortal/account-info/edit-email" element={<EditEmail4 />} key="editemail"/>,
  <Route path="/contractorPortal/account-info/edit-phone" element={<EditPhone4 />} key="editphone"/>,
  <Route path="/contractorPortal/account-info/edit-address" element={<EditAddress4 />} key="editaddress"/>,
  <Route path="/contractor-register" element={<ContractorRegister />} key="contractorregister"/>,
  <Route path="/contractor/contractor-verification" element={<Contractors />} key="Contractor"/>,
  <Route path="/contractor/edit-country" element={<EditCountry />} key="contractoreeditphone"/>,
  <Route path="/contractor/contractor-verification/contractor-address" element={<ContractorAddress />} key="Hardware"/>,
  <Route path="/contractor/contractor-upload" element={<ContractorUpload />} key="contractor"/>,
  <Route path="/contractor/contractor-experience" element={<ContractorExperience />} key="contractorexperience"/>,
  <Route path="/contractorlPortal/account-info/edit-name" element={<EditName />} key="editaddress"/>,
  <Route path="/contractor-quote-creation" element={<RequisitionInvoice1/>} key="project1"/> ,
  <Route path="/contractor-expense" element={<Expense1/>} key="project1"/> ,
  <Route path="/contractor-workplan" element={<WorkPlan1/>} key="project1"/> ,
  <Route path="/contractor-bill-summary" element={<ProBillSummary/>} key="project"/> ,
  <Route path="/contractor-submissions" element={<Submissions1/>} key="project"/> ,
  <Route path="/contractor-job-specification" element={<ContJobSpecification />} key="Professional"/>,
  <Route path="/contractor-attachments" element={<PaymentBreakdown1 />} key="Professional"/>,
  <Route path="/cont-view-past-specification" element={<Specification1 />} key="quotationEvaluation"/>,
  <Route path="/cont-portal/customer" element={<Customerss />} key="quotationEvaluation"/>,
  <Route path="/cont-view-quote" element={<Projectquote />} key="quotationEvaluation"/>,
  <Route path="/contractor-job/quoteform" element={<ContProjectQuoteFormBuilderSide />} key="quoteform"/>,

  <Route path="/contractor-quote-creation3" element={<RequisitionInvoice3/>} key="project1"/> ,
  <Route path="/contractor-expense3" element={<Expense3/>} key="project1"/> ,
  <Route path="/contractor-workplan3" element={<WorkPlan3/>} key="project1"/> ,
  <Route path="/contractor-bill-summary3" element={<ProBillSummary3/>} key="project"/> ,
  <Route path="/contractor-submissions3" element={<Submissions3/>} key="project"/> ,
  <Route path="/contractor-view-quote-job-spec" element={<ContJobSpecificationS />} key="Professional"/>,

  <Route path="/contractor-attachments3" element={<PaymentBreakdown3 />} key="Professional"/>,
  <Route path="/contractor-draft-job" element={<ContDraftJob />} key="Professional"/>,

   <Route path="/cont-portal/quote/builder" element={<SpecificationBuilderCont />} key="Professional"/>,
  <Route path="/cont-portal/order-summary" element={<GrandSummaryCont />} key="Professional"/>,
  <Route path="/cont-portal/productlist" element={<ProductListCont />} key="Professional"/>,
  <Route path="/cont-portal/payment-builder" element={<PaymentBuilderCont />} key="Professional"/>,
  <Route path="/cont-portal/leadtime" element={<LeadTimeCont />} key="Professional"/>,
  <Route path="/cont-portal/submission-details" element={<SubmissionsCont />} key="Professional"/>,



  <Route path="/admin-view-contractor-draft-job" element={<ContDraftJob />} key="Professional"/>,
  <Route path="/admin-assignorders-customproducts" element={<AssignOrder />} key="assignOrder" />,
  <Route path="/admin-assigned-customproduct-order" element={<AssignedCustomProductOrder />} key="assignOrder" />,

  <Route path="/admin-assignorders-designs" element={<AssignOrderDesigns />} key="assignOrder" />,
  <Route path="/admin-assigned-design-order" element={<AssignedDesignOrder />} key="assignOrder" />,
  <Route path="/admin-assign-hardware-product" element={<AdminAssignHardwareProducts />} key="assignOrder" />,
  <Route path="/admin-assign-hardware-product-competitive" element={<AdminAssignHardwareProductsCompetitive />} key="assignOrder" />,

  <Route path="/admin-assign-machinery-product" element={<AdminAssignMachineryProducts />} key="assignOrder" />,
  <Route path="/admin-assign-machinery-product-restricted" element={<AdminAssignMachineryRestricted />} key="assignOrder" />,
  <Route path="/fundi/quoteform" element={<ProjectQuoteFormBuilderSide />} key="quoteform"/>,
  <Route path="/admin/view/quoteform" element={<ProjectQuoteFormAdminSide />} key="quoteform"/>,
  <Route path="/admin/view-cont/quoteform" element={<AdminContActiveProjectQuote />} key="quoteform"/>,
  <Route path="/admin/view-past-cont/quoteform" element={<AdminViewContPastProjectQuote />} key="quoteform"/>,
  <Route path="/admin/view-fundi/quoteform" element={<AdminViewFundiQuoteFormActive />} key="quoteform"/>,
  <Route path="/admin-view-fundi-past/quoteform" element={<AdminViewFundiPastProjectQuote />} key="quoteform"/>,
 <Route path="/admin-view-customers" element={<CustomerAdminSide />} key="customers"/>,
  <Route path="/admin-view-fundi-customers" element={<AdminViewFundiActive />} key="customers"/>,
  <Route path="/admin-view-fundi-past-customers" element={<AdminViewPastCustomer />} key="customers"/>,
  <Route path="/admin-view-cont-customers" element={<AdminViewActiveCustomer />} key="customers"/>,
  <Route path="/admin-view-past-cont-customers" element={<AdminViewPastContCustomer />} key="customers"/>,
  <Route path="/admin-view-fundi-builders" element={<AdminViewFundiBuilderActive />} key="builders"/>,
  <Route path="/admin-view-fundi-past-builders" element={<AdminViewFundiPastBuilder />} key="builders"/>,


 

  <Route path="/admin-view-builders" element={<BuildersAdminSide />} key="builders"/>,
  <Route path="/admin-view-cont-builders" element={<BuilderAdminContView />} key="builders"/>,
  <Route path="/admin-view-past-cont-builders" element={<AdminViewPastContBuilder />} key="builders"/>,

 

  // route for sub landing page //
  <Route path='/landing-page-s' element={<SubPage/>} key='subpage'/>,
  <Route path="/quotation" element={<QuotationEvaluation />} key="quotationEvaluation"/>,
  <Route path="/adminquoteSpecification" element={<Specification />} key="quotationEvaluation"/>,
  <Route path="/adminquoteBids" element={<Bids />} key="quotationEvaluation"/>,
  <Route path="/adminquoteBidders" element={<Bidders />} key="quotationEvaluation"/>,
  <Route path="/adminquoteCustomer" element={<Customer />} key="quotationEvaluation"/>,
  <Route path="/adminquoteBids1" element={<Bids1 />} key="quotationEvaluation"/>,
  <Route path="/adminquoteBidders1" element={<Bidders1 />} key="quotationEvaluation"/>,
  





  <Route path="/comingsoon" element={<ComingSoonPage/>} key="comingsoon"/>

  

  


];

export default generalRoutes;