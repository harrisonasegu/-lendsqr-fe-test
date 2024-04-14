// /* eslint-disable react-hooks/exhaustive-deps */
// /**
//  *
//  * This hook help get a single user record from the table when the view details is clicked
//  *
//  */

// import { useAppDispatch, useAppSelector } from "../store/hooks";
// import { Apiresponse } from "../model/client/response";
// import { setAllAppKeys } from "../store";
// import { useCallback, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const useFetchSignleUser = (): void => {
//   const dispatch = useAppDispatch();
//   const state = useAppSelector((state) => {
//     return state.app;
//   });

//   const { pathname } = useLocation();

//   const userId = pathname.split("/")[3];

//   const onGetRecord = useCallback(() => {
//     const users: Array<Apiresponse.Users> = JSON.parse(
//       localStorage.getItem("users") as string
//     );
//     if (users && users.length > 0) {
//       const singleUser = users.find((user) => {
//         return user._id === userId;
//       });
//       dispatch(
//         setAllAppKeys({
//           ...state,
//           record: singleUser,
//         })
//       );
//     }
//   }, [dispatch, state.users, userId]);

//   useEffect(() => {
//     onGetRecord()
//   }, [onGetRecord]);
// };

// export default useFetchSignleUser;
