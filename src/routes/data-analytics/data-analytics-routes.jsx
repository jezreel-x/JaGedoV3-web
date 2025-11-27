import { lazy } from "react";
import { Route } from "react-router-dom";
import SalesAnalyticsDashboard from "../../pages/data-analytics/SalesAnalyticsDashboard";

const AnalyticsDashboard = lazy(() => import("../../pages/data-analytics/AnalyticsDashboard"));
const CustomerAnalyticsDashboard = lazy(() => import("../../pages/data-analytics/CustomerAnalyticsDashboard"));
const AllCustomersAnalyticsDashboard = lazy(() => import("../../pages/data-analytics/AllCustomersAnalyticsDashboard"));
const BuilderAnalyticsDashboard = lazy(() => import("../../pages/data-analytics/BuilderAnalyticsDashboard"));
const AllBuildersAnalyticsDashboard = lazy(() => import("../../pages/data-analytics/AllBuildersAnalyticsDashboard"));
const AllRequestsAnalyticsDashboard = lazy(() => import("../../pages/data-analytics/AllRequestsAnalyticsDashboard"));
const WebAnalyticsDashboard = lazy(() => import("../../pages/data-analytics/WebAnalyticsDashboard"));
const Sales = lazy(() => import("../../pages/data-analytics/Sales"));
const AdminSalesTable = lazy(() => import("../../pages/data-analytics/AdminSalesTable"));

const dataAnalyticsRoutes = [
    <Route path="/analytics-dashboard" element={<AnalyticsDashboard />} key="analytics-dashboard" />,

    // Customer Dashboards 
    <Route path="/analytics-customer-dashboard" element={<CustomerAnalyticsDashboard />} key="analytics-customer-dashboard" />,
    <Route path="/analytics-allCustomers-dashboard" element={<AllCustomersAnalyticsDashboard />} key="analytics-all-dashboard" />,

    // Builder Dashboards
    <Route path="/analytics-builder-dashboard" element={<BuilderAnalyticsDashboard />} key="analytics-builder-dashboard" />,
    <Route path="/analytics-allBuilders-dashboard" element={<AllBuildersAnalyticsDashboard />} key="analytics-all-builders-dashboard" />,

    // Requests Dashboard
    <Route path="/requests" element={<AllRequestsAnalyticsDashboard />} key="analytics-requests-dashboard" />,

    // Web Analytics Dashboard
    <Route path="/web" element={<WebAnalyticsDashboard />} key="web-analytics-dashboard" />,

    // Sales Analytics Dashboard
    <Route path="/analytics-sales-dashboard" element={<SalesAnalyticsDashboard />} key="analytics-sales-dashboard" />,
    <Route path="/sales" element={<Sales />} key="sales" />,
    <Route path="/admin-sales-table" element={<AdminSalesTable />} key="admin-sales-table" />,
];

export default dataAnalyticsRoutes;