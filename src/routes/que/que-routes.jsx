import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import AssignOrder from "../../components/AssignOrder";
// import customers from "./components/CustomerPage";

// import DetailsPage from './DetailsPage';
import Builders from "../../components/Builders";
import IndiCustomers from "../../components/IndiCustomers";
import OrganCustomer from "../../components/OrganCustomer";
// import JobForm from "../../components/JobForm";
import AssignmentRegister from "../../components/AssignmentRegister";
// import Competitive from "./components/Competitive";
import QuotationEvaluation from "../../components/QuotationEvaluation";
import AdminPaymentConfirmation from "../../pages/admin/AdminPaymentConfirmation";
import AdminCompetitiveSource from "../../components/AdminCompetitiveSource"; // Adjust the path as needed
import ProjectQuoteForm from "../../components/ProjectQuoteForm";
import CustomerActiveProgress from "../../pages/customer/CustomerActiveProgress";
import ProjectFinance from "../../components/ProjectFinance";
import AdminProducts from "../../pages/admin/AdminProducts";
import EditProductForm from "../../components/EditProductForm";
import BillDetails from "../../components/BillDetails";
// import NavigationBar from "./components/Navigation/NavigationBar";
import CustomerPortal from "../../pages/customer/customerPortal/CustomerPortal";
import Contractor from "../../pages/customer/customerPortal/contractor/Contractor";
import ProfessionalPortal from "../../pages/customer/customerPortal/professionalPortal/Professional";
import Hardware from "../../pages/customer/customerPortal/hardwarePortal/ShopApp";
// import FundiPortfolio from "./components/fundiPortfolio/FundiPortfolio";
// import AccountProfile from "./components/fundiPortfolio/manageAccount/AccountProfile";
// import UploadAttachments from "./components/fundiPortfolio/manageAccount/UpLoadAttachments";
// import Products from "./components/fundiPortfolio/manageAccount/Products";
// import Experience from "./components/fundiPortfolio/manageAccount/Experience";
// import AddProducts from "./components/fundiPortfolio/manageAccount/AddProducts";
// import ProductsTable from "./components/fundiPortfolio/manageAccount/ProductsTable";
// import EditPhone from "./components/fundiPortfolio/manageAccount/EditAccountInfo/EditPhone";
// import EditEmail from "./components/fundiPortfolio/manageAccount/EditAccountInfo/EditEmail";
// import Address from "./components/fundiPortfolio/manageAccount/Address";
import JobRequestDetails from "../../pages/fundi/fundiPortfolio/JobRequestDetails";
// import TrackProgress from "./components/fundiPortfolio/TrackProgress";
// import ManageAccount from "./components/customerPortal/manageAccount/ManageAccount";
// import Chatbot from "./components/customerPortal/ChatBot";
import FundiPortfolio from "../../pages/fundi/fundiPortfolio/FundiPortfolio";
import AccountProfile from "../../pages/fundi/fundiPortfolio/manageAccount/AccountProfile";
import UploadAttachments from "../../pages/fundi/fundiPortfolio/manageAccount/UpLoadAttachments";
import Products from "../../pages/fundi/fundiPortfolio/manageAccount/Products";
import Experience from "../../pages/fundi/fundiPortfolio/manageAccount/Experience";
// import ProfileNavBar from "./components/fundiPortfolio/manageAccount/ProfileNavBar";
import AddProducts from "../../pages/fundi/fundiPortfolio/manageAccount/AddProducts";
import ProductsTable from "../../pages/fundi/fundiPortfolio/manageAccount/ProductsTable";
import EditPhone from "../../pages/fundi/fundiPortfolio/manageAccount/EditAccountInfo/EditPhone";
import EditEmail from "../../pages/fundi/fundiPortfolio/manageAccount/EditAccountInfo/EditEmail";
import Address from "../../pages/fundi/fundiPortfolio/manageAccount/Address";
import CustomerProfile from "../../pages/customer/customerPortal/manageAccount/CustomerProfile";
import CustomerAddress from "../../pages/customer/customerPortal/manageAccount/CustomerAddress";
import CustomerUploads from "../../pages/customer/customerPortal/manageAccount/CustomerUploads";
import CustomerPassword from "../../pages/customer/customerPortal/manageAccount/CustomerPassword";
import RequisitionInvoice from "../../pages/customer/customerPortal/fundiRequisition/RequisitionInvoice";
import AnalyticsDashboard from "../../components/AnalyticsDashboard";
import Register from "../../components/Register";
import Register2 from "../../components/Register2";

import Quotations from "../../pages/fundi/fundiPortfolio/fundiLanding/Quotations";
import Active from "../../pages/fundi/fundiPortfolio/fundiLanding/Active";
import Past from "../../pages/fundi/fundiPortfolio/fundiLanding/Past";
import Account2 from "../../pages/professional/ProfessionalPortal/ManageAccount/Account2";
import Experience2 from "../../pages/professional/ProfessionalPortal/ManageAccount/Experience2";
import Products2 from "../../pages/professional/ProfessionalPortal/ManageAccount/Products2";
import Address2 from "../../pages/professional/ProfessionalPortal/ManageAccount/Address2";
// import Uploads2 from "./components/ProfessionalPortal/ManageAccount/Uploads2";
import Project from "../../pages/professional/ProfessionalPortal/ManageAccount/Project";
import Profession from "../../pages/professional/ProfessionalPortal/ManageAccount/Profession";
import JobSpecifications from "../../pages/fundi/fundiPortfolio/active/JobSpecifications";



import Quote from "../../pages/fundi/fundiPortfolio/active/Quote";
import PaymentFundi from "../../pages/fundi/fundiPortfolio/active/PaymentFundi";
import CustomerFundi from "../../pages/fundi/fundiPortfolio/active/CustomerFundi";
import Draft from "../../pages/fundi/fundiPortfolio/fundiLanding/Draft";
import NotFound from "../../pages/not-found/NotFound";
import TrackProgress from "../../pages/fundi/fundiPortfolio/TrackProgress";

import CustomerPage from "../../pages/customer/CustomerPage";
import ShopAppPage from "../../pages/shop-app/ShopAppPage";

// import TestWork from "./Re-usable components/test";

// import ProBillSummary from "./components/customerPortal/professionalPortal/requisitions/ProBillSummary";
// import ProTeam from "./components/customerPortal/professionalPortal/requisitions/ProTeam";
// import CustomerAccountSideNav from "./components/customerPortal/manageAccount/CustomerAccountSideNav";
// import ShopAppNavBar from "./components/Navigation/ShopAppNavBar";

const queRoutes = () => {
  return (
    <Router>
      <Routes>
        {/*
        <NavigationBar />
        <ProBillSummary />
        <ProTeam />  
        <Chatbot />
        <ShoppingCart /> 
        <ProfileNavBar /> 
        <CustomerAccountSideNav /> 
        */}

        <Route path="/assignorders" element={<AssignOrder />} />
        <Route path="/builders" element={<Builders />} />
        <Route path="/customers" element={<CustomerPage />} />

        <Route path="/shopapp" element={<ShopAppPage />} key="shopapp" />
        <Route path="/individual" element={<IndiCustomers />} />
        <Route path="/organization" element={<OrganCustomer />} />
        {/* <Route path="/jobform" element={<JobForm />} />  */}
        
        <Route path="/competitive" element={<AdminCompetitiveSource />} />
        <Route path="/assignment" element={<AssignmentRegister />} />
        <Route path="/quotation" element={<QuotationEvaluation />} />
        <Route path="/payment" element={<AdminPaymentConfirmation />} />
        <Route path="/quoteform" element={<ProjectQuoteForm />} />
        <Route path="/" element={<CustomerActiveProgress />} />
        <Route path="/finance" element={<ProjectFinance />} />
        <Route path="/bill-details/:id" element={<BillDetails />} />
        <Route path="/products" element={<AdminProducts />} />
        <Route path="/edit" element={<EditProductForm />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register2" element={<Register2 />} />


        {/* Customer Routes */}
        <Route path="/customer" element={<CustomerPortal />} />
        <Route path="/customer/manage-account" element={<CustomerProfile />} />
        <Route path="/customer/address" element={<CustomerAddress />} />
        <Route path="/customer/account-uploads" element={<CustomerUploads />} />
        <Route path="/customer/security" element={<CustomerPassword />} />
        <Route path="/customer/fundi-requisition-invoice" element={<RequisitionInvoice />} />
        
        {/* Hardware Shop Routes */}
        <Route path="/hardware_shop" element={<Hardware />} />

        <Route path="/fundi-portal/job-request" element={<JobRequestDetails />}  />
        <Route path="customer/fundi-requisition-invoice" element={<RequisitionInvoice />} />
        <Route path="/request-contractor" element={<Contractor />} />
        <Route path="/request-professional" element={<ProfessionalPortal />} />

        {/* Parent Route for Hardware Shop */}
        <Route path="/hardware_shop" element={<Hardware />} />

        {/* fundi */}
        <Route path="/fundi-portal" element={<FundiPortfolio />} />
        <Route path="/fundi-portal/draft" element={<Draft />} /> 
        <Route path="/fundi-portal/draft" element={<Draft />} />
        <Route path="/fundi-portal/quotations" element={<Quotations />} />
        <Route path="/fundi-portal/active/progress" element={<TrackProgress />} />
        <Route path="/fundi-portal/active" element={<Active />} />
        <Route path="/fundi-portal/active/job-specification" element={<JobSpecifications />} />
        <Route path="/fundi-portal/active/Quote" element={<Quote />} />
        <Route path="/fundi-portal/active/payment-fundi" element={<PaymentFundi />} />
        <Route path="/fundi-portal/active/customer" element={<CustomerFundi />} />
        <Route path="/fundi-portal/past" element={<Past />} />
        <Route path="/fundi-portal/account-info" element={<AccountProfile />} />
        <Route path="/fundi-portal/account-info/edit-email" element={<EditEmail />} />
        <Route path="/fundi-portal/account-info/edit-phone" element={<EditPhone />} />
        <Route path="/fundi-portal/address" element={<Address />} />
        <Route path="/fundi-portal/account-uploads" element={<UploadAttachments />} /> 
        <Route path="/fundi-portal/products" element={<Products />} />
        <Route path="/fundi-portal/products/add-product" element={<AddProducts />} />
        <Route path="/fundi-portal/fundi-portal/products/add-product/products-table" element={<ProductsTable />} />
        <Route path="/fundi-portal/experience" element={<Experience />} />

        {/* ProfessionalPortal */}
        <Route path="/professionalPortal" element={<Profession />} />
        <Route path="/professionalPortal/account-info" element={<Account2 />} />
        <Route path="/professionalPortal/experience" element={<Experience2 />} />
        <Route path="/professionalPortal/products" element={<Products2 />} />

        <Route path="/professionalPortal/project-details" element={<Project/>} /> ,
        {/* <Route path="/professionalPortal/uploads" element={<Uploads2 />} />, */}

        <Route path="/professionalPortal/address" element={<Address2 />} />,

        {/* Catch-All Route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default queRoutes;
