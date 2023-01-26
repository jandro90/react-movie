import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { Loader } from "../components/Loader";
import LoginGuard from "../guards/LoginGuard";
import UserGuard from "../guards/UserGuard";

// Lazy Views
const LoginViewLazy = lazy(() => import('../Views/LoginView'));
const HomeViewLazy = lazy(() => import('../Views/HomeView'));
// Lazy Pages
const MovieListPageLazy = lazy(() => import('../Pages/MovieListPage'));
const MovieDetailPageLazy = lazy(() => import('../Pages/MovieDetailPage'));
const AboutPageLazy = lazy(() => import('../Pages/About'));

const router = createBrowserRouter([
    {
      path: "/",
      element:
      <LoginGuard>
         <Suspense fallback={<Loader />}> 
            <LoginViewLazy />
         </Suspense>
      </LoginGuard>

    },
    {
        path: "app",
        element: 
        <UserGuard>
           <Suspense fallback={<Loader />}> 
              <HomeViewLazy />
           </Suspense>
        </UserGuard>,

        children: [
            {
                path: "home",
                element:
                   <Suspense fallback={<Loader />}> 
                    <MovieListPageLazy />
                   </Suspense>,
            },
            {
                path: "detail/:id",
                element:
                <Suspense fallback={<Loader />}> 
                    <MovieDetailPageLazy />
                </Suspense>,
            },
            {
               path: "about",
               element:
               <Suspense fallback={<Loader />}> 
                   <AboutPageLazy />
               </Suspense>,
           },
        ]
      },
      {
        path: "*",
        element: <Navigate to={'/'}/>
      },
  ]);

export default router;