// import { useCallback } from "react";
// import { useAppDispatch } from "../store/hooks";
// import { setAppKey } from "../store";

// interface SearchConfiguration {
//   (value: string): void;
// }

// const useSearch = (): SearchConfiguration => {
//   const dispatch = useAppDispatch();

//   const onSearch = useCallback(
//     (value: string) => {
//       dispatch(
//         setAppKey({
//           key: "searchTerm",
//           value,
//         })
//       );
//     },
//     [dispatch]
//   );

//   return onSearch;
// };

// export default useSearch;
