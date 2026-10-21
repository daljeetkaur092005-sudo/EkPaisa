import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../../Layouts/MainLayout";

// Lazy-loaded pages
const HomePage = lazy(
  () => import("../../Features/Finance/UI/Pages/HomePage")
);

const LoanPage = lazy(
  () => import("../../Features/Finance/UI/Pages/LoanPage")
);

const ApplyPage = lazy(
  () => import("../../Features/Finance/UI/Pages/ApplyPage")
);
const BlogPage = lazy(() => import("../../Features/Finance/UI/Pages/BlogPage"));


// Loading UI
const PageLoader = () => (
  <div className="flex min-h-[60vh] items-center justify-center">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-purple-200 border-t-purple-700" />
  </div>
);

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: (
            <Suspense fallback={<PageLoader />}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: "loan",
          element: (
            <Suspense fallback={<PageLoader />}>
              <LoanPage />
            </Suspense>
          ),
        },
        {
          path: "apply",
          element: (
            <Suspense fallback={<PageLoader />}>
              <ApplyPage />
            </Suspense>
          ),
        },

    {
          path: "blogs",
          element: (
            <Suspense fallback={<PageLoader />}>
              <BlogPage />
            </Suspense>
          ),
        },














      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;