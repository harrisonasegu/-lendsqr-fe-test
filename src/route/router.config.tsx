// import { createBrowserRouter } from "react-router-dom";
// import { routePath } from "../utils/helper";
// import { Login, User, UserDetails } from "./lazy-routes";
// import { AppLayout } from "../common/layouts/App/AppLayout";
// import { AuthLayout } from "../common/layouts/Auth/AuthLayout";
// import { ProtectedRoute } from "./router-protection";

// export const router = createBrowserRouter([
//   {
//     element: <AuthLayout />,
//     children: [
//       {
//         path: routePath.Login,
//         Component: Login,
//       },
//     ],
//   },
//   {
//     element: (
//       <ProtectedRoute>
//         <AppLayout />
//       </ProtectedRoute>
//     ),
//     path: routePath.User,
//     children: [
//       {
//         index: true,
//         Component: User,
//       },
//       {
//         path: routePath.UserDetails + ":id",
//         Component: UserDetails,
//       },
//     ],
//   },
// ]);
