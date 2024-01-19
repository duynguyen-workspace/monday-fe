import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { PATH } from "../utils/paths";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";

//? LAZY LOADING PAGES
const HomePage = lazy(() => import("../modules/home"));
const NotFoundPage = lazy(() => import("../modules/errors/NotFound"))
const LoginPage = lazy(() => import("../modules/auth/Login"))
const RegisterPage = lazy(() => import("../modules/auth/Register"))
const AdminPage = lazy(() => import("../modules/admin"))
const ProjectManaPage = lazy(() => import("../modules/project-management"))
const TaskManaPage = lazy(() => import("../modules/task-management"))

/**
 * ? Authentication Router: check user login status
 * @returns Login || Home 
 */
const AuthenticateRouter = () => {
    // Check for authentication token
    const isAuthenticated = false;

    // Check Navigation
    return isAuthenticated ? (<Navigate to={PATH.HOME} />) : <Outlet />
}

/**
 * Configure route elements to navigate between components
 * @returns routes
 */
const useRouteElements = () => {
    let element = useRoutes([
        {
            path: "",
            element: <AuthenticateRouter />,
            children: [
                {
                    path: "",
                    element:
                        <Suspense callBack={<div>Loading</div>}>
                            <AuthLayout />
                        </Suspense>,
                    children: [
                        {
                            path: PATH.LOGIN,
                            element:
                                <Suspense callBack={<div>Loading</div>}>
                                    <LoginPage />
                                </Suspense>,
                        },
                        {
                            path: PATH.REGISTER,
                            element:
                                <Suspense callBack={<div>Loading</div>}>
                                    <RegisterPage />
                                </Suspense>,
                        }
                    ]
                }
            ]
        },
        {
            path: "",
            element: <MainLayout />,
            children: [
                {
                    path: PATH.HOME,
                    index: 1,
                    element:
                        <Suspense callBack={<div>Loading</div>}>
                            <HomePage />
                        </Suspense>,
                },
                {
                    path: PATH.PROJECT,
                    // index: 2,
                    element:
                        <Suspense callBack={<div>Loading</div>}>
                            <ProjectManaPage />,
                        </Suspense>,
                },
                {
                    path: PATH.TASK,
                    // index: 3,
                    element:
                        <Suspense callBack={<div>Loading</div>}>
                            <TaskManaPage />
                        </Suspense>,
                },
            ],
        },
        {
            path: PATH.ADMIN,
            element:
                <Suspense callBack={<div>Loading</div>}>
                    <AdminLayout />
                </Suspense>,
            children: [
                {
                    index: true,
                    element:
                        <Suspense callBack={<div>Loading</div>}>
                            <AdminPage />
                        </Suspense>,
                },
            ],
        },
        {
            path: "*",
            element:
                <Suspense callBack={<div>Loading</div>}>
                    <NotFoundPage />
                </Suspense>,
        }
    ]);

    return element;
}

export default useRouteElements