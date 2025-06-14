import { lazy } from "react";
import { ROUTER_URL } from "../../../consts/router.path.const";
import type { RouteObject } from "react-router-dom";

// import page 
const OverviewPage = lazy(() => import("../../../pages/admin/overview"));
const UserManagementPage = lazy(() => import("../../../pages/admin/user"));
const SettingManagementPage = lazy(() => import("../../../pages/auth/settings"));
const CategoryManagementPage = lazy(() => import("../../../pages/admin/category"));
const ProductManagementPage = lazy(() => import("../../../pages/admin/product"));
const OrderManagementPage = lazy(() => import("../../../pages/admin/order"));
const ReviewManagementPage = lazy(() => import("../../../pages/admin/review"));
const StatisticsPage = lazy(() => import("../../../pages/admin/statistics"));

export const AdminRoutes: RouteObject = {
    path: ROUTER_URL.ADMIN.BASE,
    children: [
        {
            index: true,
            element: <OverviewPage />,
        },
        {
            index: false,
            path: ROUTER_URL.ADMIN.USERS,
            element: <UserManagementPage />,
        },
        {
            index: false,
            path: ROUTER_URL.ADMIN.SETTINGS,
            element: <SettingManagementPage />,
        },
        {
            index: false,
            path: ROUTER_URL.ADMIN.CATEGORIES,
            element: <CategoryManagementPage />,
        },
        {
            index: false,
            path: ROUTER_URL.ADMIN.PRODUCTS,
            element: <ProductManagementPage />,
        },
        {
            index: false,
            path: ROUTER_URL.ADMIN.ORDERS,
            element: <OrderManagementPage />,
        },
        {
            index: false,
            path: ROUTER_URL.ADMIN.REVIEWS,
            element: <ReviewManagementPage />,
        },
        {
            index: false,
            path: ROUTER_URL.ADMIN.STATISTICS,
            element: <StatisticsPage />,
        }
    ],
};

