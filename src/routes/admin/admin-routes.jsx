import { lazy } from "react";
import { Route } from "react-router-dom";

const AdminPanel1 = lazy(() => import("../../pages/admin/AdminPanel1"));
const AdminPanel = lazy(() => import("../../pages/admin/AdminPanel"));
const DetailsPage = lazy(() => import("../../pages/admin/AdminPanel4"));
const AdminViewActiveContJob = lazy(() => import("../../pages/admin/AdminViewActiveContJob"));
const AdminViewPastContJob = lazy(() => import("../../pages/admin/AdminViewPastContJob"));
const AdminViewFundiActiveProgress = lazy(() => import("../../pages/admin/AdminViewFundiActiveProgress"));
const AdminViewFundiPastJobProgress = lazy(() => import("../../pages/admin/AdminViewFundiPastJob"));


const AdminPanel5 = lazy(() => import("../../pages/admin/AdminPanel5"));
const AdminPanel2 = lazy(() => import("../../pages/admin/AdminPanel2"));
const AdminPanel3 = lazy(() => import("../../pages/admin/AdminPanel3"));

const AdminPanel7 = lazy(() => import("../../pages/admin/AdminPanel7"));
const AdminPanel8 = lazy(() => import("../../pages/admin/AdminPanel8"));
const AdminPanel9 = lazy(() => import("../../pages/admin/AdminPanel9"));


const AdminPanel6 = lazy(() => import("../../pages/admin/AdminPanel6"));
const AdminDetailPage = lazy(() => import("../../pages/admin/AdminDetailPage"));
const JobSpecification2 = lazy(() => import("../../components/JobSpecification2"));
const AdminCompetitiveContractor = lazy(() => import("../../pages/professional/AdminCompetitiveContractor"));
// const JobSpecification3 = lazy(() => import("../../components/JobSpecification3"));
const AdminCompetitiveProfessional = lazy(() => import("../../components/AdminCompetitiveProfessional"));

const JobSpecification = lazy(() => import("../../components/JobSpecification"));
const AdminSingleSource = lazy(() => import("../../pages/admin/AdminSingleSource"));
const AdminCompetitiveSource = lazy(() => import("../../components/AdminCompetitiveSource"));
const AdminSingleSource1 = lazy(() => import("../../pages/admin/AdminUnreviewedNewJobs/AdminSingleSource"));
const AdminCompetitiveSource2 = lazy(() => import("../../pages/admin/AdminUnreviewedNewJobs/AdminCompetitiveSource"));
const AdminJobSpecification = lazy(() => import("../../pages/admin/AdminUnreviewedNewJobs/JobSpecification"));
const AdminCompetitiveProfessional1 = lazy(() => import("../../pages/admin/AdminUnreviewedNewJobs/AdminCompetitiveProfessional"));
const AdminCompetitiveContractor1 = lazy(() => import("../../pages/admin/AdminUnreviewedNewJobs/AdminCompetitiveContractor"));
const AdminJobSpecification1 = lazy(() => import("../../pages/admin/AdminUnreviewedNewJobs/JobSpecification2"));



const Register2 = lazy(() => import("../../components/Register2"));
const Register = lazy(() => import("../../components/Register"));
const AssignmentRegister = lazy(() => import("../../components/AssignmentRegister"));
const AdminPaymentConfirmation = lazy(() => import("../../pages/admin/AdminPaymentConfirmation"));
const ProjectFinance = lazy(() => import("../../components/ProjectFinance"));
const BillDetails = lazy(() => import("../../components/BillDetails"));
const AssignedJob = lazy(() => import("../../pages/admin/AssignedJob"));
const AssignedJob2 = lazy(() => import("../../pages/admin/BidInvitedJobs/AssignedJob"));
const AssignedProfJob = lazy(() => import("../../pages/admin/AssignedProfJob"));
const AssignedProfJob2 = lazy(() => import("../../pages/admin/BidInvitedJobs/AssignedProfJob"));
const AssignedContJob = lazy(() => import("../../pages/admin/AssignedContJob"));
const AssignedContJob2 = lazy(() => import("../../pages/admin/BidInvitedJobs/AssignedContJob"));



const JobReqDetailsFundiAdmin = lazy(() => import("../../pages/fundi/fundiPortfolio/JobReqDetailsFundiAdmin"));
const JobReqDetailsContAdmin = lazy(() => import("../../pages/fundi/fundiPortfolio/JobReqDetailsContAdmin"));
const JobReqDetailsProfAdmin = lazy(() => import("../../pages/fundi/fundiPortfolio/JobReqDetailsProfAdmin"));
const Quote = lazy(() => import("../../pages/admin/fundiQuote/Quote"));
const JobSpecifications = lazy(() => import("../../pages/admin/fundiQuote/JobSpecifications"));
const PaymentFundi = lazy(() => import("../../pages/admin/fundiQuote/PaymentFundi"));
const CustomerFundi = lazy(() => import("../../pages/admin/fundiQuote/CustomerFundi"));
const CustomerViewProfActiveJob = lazy(() => import("../../pages/admin/CustomerViewProfActiveJob"));
const BuilderViewProfActiveJob = lazy(() => import("../../pages/admin/BuilderViewProfActiveJob"));
const BuilderViewContActiveJob = lazy(() => import("../../pages/admin/BuilderViewContActiveJob"));

const CustomerViewContActiveJob = lazy(() => import("../../pages/admin/CustomerViewContActiveJob"));
const CustomerViewPastContJob = lazy(() => import("../../pages/admin/CustomerViewPastContJob"));
const CustomerViewPastProfJob = lazy(() => import("../../pages/admin/CustomerViewPastProfJob"));
const AssignOrder1 = lazy(() => import("../../pages/admin/AdminUnreviewedNewOrders/AssignOrder"));
const AssignOrderDesigns1 = lazy(() => import("../../pages/admin/AdminUnreviewedNewOrders/AssignOrderDesigns"));
const AdminAssignHardwareProducts1 = lazy(() => import("../../pages/admin/AdminUnreviewedNewOrders/AdminAssignHardwareProducts"));
const AdminAssignHardwareProductsCompetitive1 = lazy(() => import("../../pages/admin/AdminUnreviewedNewOrders/AdminAssignHardwareProductsCompetitive"));
const AdminAssignMachineryProducts1 = lazy(() => import("../../pages/admin/AdminUnreviewedNewOrders/AdminAssignMachineryProducts"));
const AdminAssignMachineryRestricted1 = lazy(() => import("../../pages/admin/AdminUnreviewedNewOrders/AdminAssignMachineryRestricted"));
const AssignedHireandEquipment = lazy(() => import("../../components/AssignedHardwareRestricted"));
const AssignedHardwareCompetitive = lazy(() => import("../../components/AssignedHardwareCompetitive"));
const AssignedHardwareRestricted = lazy(() => import("../../components/AssignedHardwareRestricted"));











const adminRoutes = [
  <Route path="/admin" element={<AdminPanel />} key="admin" />,
  <Route path="/jobs" element={<AdminPanel1 />} key="jobs" />,
  <Route path="/new" element={<AdminPanel1 />} key="new" />,
  <Route path="/active" element={<AdminPanel1 />} key="active" />,
  <Route path="/past" element={<AdminPanel1 />} key="past" />,
  <Route path="/draft" element={<AdminPanel />} key="draft" />,
  <Route path="/quotations" element={<AdminPanel1 />} key="quotations" />,
  <Route path="/admin-view-active-job" element={<DetailsPage />} key="adminpanel4" />,
  <Route path="/admin-view-cont-active-job" element={<AdminViewActiveContJob />} key="adminpanel4" />,
  <Route path="/admin-view-cont-past-job" element={<AdminViewPastContJob />} key="adminpanel4" />,

  <Route path="/admin-view-fundi-active-job" element={<AdminViewFundiActiveProgress />} key="adminpanel4" />,
  <Route path="/admin-view-fundi-past-progress" element={<AdminViewFundiPastJobProgress />} key="adminpanel4" />,

  <Route path="/admin-view-assigned-job" element={<AssignedJob />} key="assignedjob" />,
  <Route path="/admin-view-assigned-prof-job" element={<AssignedProfJob />} key="assignedjob" />,
  <Route path="/admin-view-assigned-cont-job" element={<AssignedContJob />} key="assignedjob" />,
  <Route path="/admin-view-assigned-cont-job2" element={<AssignedContJob2 />} key="assignedjob" />,
  <Route path="/admin-view-assigned-prof-job2" element={<AssignedProfJob2 />} key="assignedjob" />,
  <Route path="/admin-view-assigned-job2" element={<AssignedJob2 />} key="assignedjob" />,
    <Route path="/admin-assignorders-customproducts-unreviewed" element={<AssignOrder1 />} key="assignOrder" />,
    <Route path="/admin-assignorders-designs-unreviewed" element={<AssignOrderDesigns1 />} key="assignOrder" />,

    <Route path="/admin-assign-hardware-product-unreviwed" element={<AdminAssignHardwareProducts1 />} key="assignOrder" />,
    <Route path="/admin-assign-hardware-product-competitive-unreviwed" element={<AdminAssignHardwareProductsCompetitive1 />} key="assignOrder" />,
    <Route path="/admin-assign-machinery-product-restricted-unreviwed" element={<AdminAssignMachineryProducts1 />} key="assignOrder" />,
    <Route path="/admin-assign-machinery-product-unreviwed" element={<AdminAssignMachineryRestricted1 />} key="assignOrder" />,
  <Route path="/admin-assigned-Hire&Equipment-order" element={<AssignedHireandEquipment />} key="assignOrder" />,
  <Route path="/admin-assigned-Hardware1-order" element={<AssignedHardwareCompetitive />} key="assignOrder" />,
  <Route path="/admin-assigned-Hardware2-order" element={<AssignedHardwareRestricted />} key="assignOrder" />,






  

  <Route path="/admin-view-new-fundi-job" element={<JobReqDetailsFundiAdmin />} key="adminpanel4" />,
  <Route path="/admin-view-new-contractor-job" element={<JobReqDetailsContAdmin />} key="adminpanel4" />,
  <Route path="/admin-view-new-professional-job" element={<JobReqDetailsProfAdmin />} key="adminpanel4" />,
  <Route path="/admin-view-new-order-quote" element={<Quote />} key="adminpanel4" />,
  <Route path="/admin-view-new-order-summary" element={<JobSpecifications />} key="adminpanel4" />,
  <Route path="/admin-view-new-order-payment-breakdown" element={<PaymentFundi />} key="adminpanel4" />,
  <Route path="/admin-view-new-order-payment-submissions" element={<CustomerFundi />} key="adminpanel4" />,
  
  <Route path="/admin-fundi-singlesource" element={<AdminSingleSource1 />} key="adminpanel4" />,
  <Route path="/admin-fundi-competitive" element={<AdminCompetitiveSource2 />} key="adminpanel4" />,
  <Route path="/admin-prof-jobspecification" element={<AdminJobSpecification />} key="adminpanel4" />,
  <Route path="/admin/competitive/professional" element={<AdminCompetitiveProfessional1 />} key="adminpanel4" />,
  <Route path="/admin/competitive/contractor" element={<AdminCompetitiveContractor1 />} key="adminpanel4" />,
  <Route path="/admin-cont-jobspecification2" element={<AdminJobSpecification1 />} key="adminpanel4" />,
  
  




  <Route path="/admin-view-past-job" element={<AdminPanel5 />} key="adminpane5" />,
  <Route path="/customer-view-active-job" element={<AdminPanel6 />} key="adminpane5" />,
  <Route path="/customer-view-active-prof-progress" element={<CustomerViewProfActiveJob />} key="adminpane5" />,
  <Route path="/professional-view-active-job-progress" element={<BuilderViewProfActiveJob />} key="adminpane5" />,
  <Route path="/contractor-view-active-job-progress" element={<BuilderViewContActiveJob />} key="adminpane5" />,

  <Route path="/customer-view-active-cont-progress" element={<CustomerViewContActiveJob />} key="adminpane5" />,
  <Route path="/customer-view-past-cont-progress" element={<CustomerViewPastContJob />} key="adminpane5" />,
  <Route path="/customer-view-past-prof-progress" element={<CustomerViewPastProfJob />} key="adminpane5" />,

  <Route path="/customer-view-past-job" element={<AdminPanel7 />} key="adminpane5" />,
  <Route path="/fundi-view-active-job" element={<AdminPanel8 />} key="adminpane5" />,
  <Route path="/contractor-view-past-job" element={<AdminPanel9 />} key="adminpane5" />,

  <Route path="/orders" element={<AdminPanel2 />} key="adminpanel2" />,
  <Route path="/orders2" element={<AdminPanel3 />} key="adminpanel3" />,
  <Route path="/admin-details" element={<AdminDetailPage />} key="admin-details" />,
  <Route path="/jobspecification2" element={<JobSpecification2 />} key="jobspecification"/>,
  <Route path="/competitive/contractor" element={<AdminCompetitiveContractor />} key="jobspecification"/>,
  <Route path="/competitive/contractor" element={<AdminCompetitiveContractor />} key="jobspecification"/>,
  <Route path="/competitive/professional" element={<AdminCompetitiveProfessional />} key="jobspecification"/>,

  <Route path="/jobspecification" element={<JobSpecification />} key="jobspecification"/>,
  <Route path="/singlesource" element={<AdminSingleSource />}  key="singlesource" />,
  <Route path="/competitive" element={<AdminCompetitiveSource />} key="jobform" /> ,
  <Route path="/register2" element={<Register2 />}key="register2" />,
  <Route path="/register" element={<Register />}key="register" />,
   <Route path="/assignment" element={<AssignmentRegister />} key="assignmentregister"/>,
   <Route path="/payment" element={<AdminPaymentConfirmation />} key="payment"/>,
   <Route path="/project-finance" element={<ProjectFinance />} key="payment"/>,
   <Route path="/bill-details/:id" element={<BillDetails />} key="payment" />

  


];

export default adminRoutes;
