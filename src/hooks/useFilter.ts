// /* eslint-disable @typescript-eslint/no-explicit-any */

// import { useAppSelector } from "../store/hooks";

// const useFilter = (array: any[]) => {
//   const state = useAppSelector((state) => {
//     return state.app;
//   });
//   let dataSource = array;

//   if (state?.searchTerm) {
//     dataSource = dataSource?.filter((x: any) => {
//       let include = false;
//       Object.values(x).forEach(function (element2: any) {
//         if (typeof element2 === "object" ) {
//           Object.values(element2).forEach((y) => {
//             if (y !== null && y) {
//               const lowerCaseElement = y.toString().toLowerCase();
//               if (lowerCaseElement.includes(state?.searchTerm?.toLowerCase() as string)) {
//                 include = true;
//               }
//             }

//           })
//         } else {
//           if (element2 !== null && element2) {
//             const lowerCaseElement = element2.toString().toLowerCase();
//             if (lowerCaseElement.includes(state?.searchTerm?.toLowerCase() as string)) {
//               include = true;
//             }
//           }
//         }
//       });
//       return include;
//     });
//   }

//   dataSource = dataSource?.map((item: any, index: number) => {
//     return {
//       key: index + 1,
//       ...item,
//     };
//   });

//   return { dataSource };
// };

// export default useFilter;
