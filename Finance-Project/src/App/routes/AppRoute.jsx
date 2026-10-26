import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../../Layouts/MainLayout";
import PersonalLoanPage from "../../Features/Finance/UI/Pages/PersonalLoanPage";
import HomeLoanPage from "../../Features/Finance/UI/Pages/HomeLoanPage";
import LoanAgainstProperty from "../../Features/Finance/UI/Pages/LoanAgainstProperty";

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
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#087A3D]/25 border-t-[#087A3D]" />
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


   {
          path: "personal-loan",
          element: (
            <Suspense fallback={<PageLoader />}>
              <PersonalLoanPage />
            </Suspense>
          ),
        },

  {
          path: "home-loan",
          element: (
            <Suspense fallback={<PageLoader />}>
              <HomeLoanPage />
            </Suspense>
          ),
        },


  {
          path: "/loan-against-property",
          element: (
            <Suspense fallback={<PageLoader />}>
              <LoanAgainstProperty />
            </Suspense>
          ),
        },






      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;