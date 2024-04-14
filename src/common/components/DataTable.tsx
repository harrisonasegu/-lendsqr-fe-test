// /* eslint-disable @typescript-eslint/no-explicit-any */
// import "./DataTable.scss";
// import { Empty, Table } from "antd";
// import React, { useCallback } from "react";
// import { useAppDispatch, useAppSelector } from "../../store/hooks";
// import { setAllAppKeys } from "../../store";
// import { AppProps } from "../../model/application/props";
// import nextArrow from "../../assets/icons/next-btn.png";
// import prevArrow from "../../assets/icons/prev-btn.png";
// import dropdown from "../../assets/icons/dropdown-outline.png";

// const PageTable: React.FC<AppProps.TableData> = ({
//   column,
//   dataSource,
//   loading,
//   total,
//   scrollX,
// }) => {
//   const dispatch = useAppDispatch();
//   const state = useAppSelector((state) => {
//     return state.app;
//   });
//   const onPaginate = useCallback(
//     (page: number) => {
//       dispatch(
//         setAllAppKeys({
//           ...state,
//           page: page - 1,
//         })
//       );
//     },
//     [dispatch, state]
//   );

//   return (
//     <Table
//       columns={column}
//       loading={loading}
//       dataSource={dataSource}
//       className="data-table"
//       pagination={{
//         position: ["bottomRight"],
//         onChange: onPaginate,
//         itemRender: (_current: any, type: any, originalElement: any) => {
//           if (type === "prev") {
//             return (
//               <a className="prev">
//                 <img src={prevArrow} />
//               </a>
//             );
//           }
//           if (type === "next") {
//             return (
//               <a className="next">
//                 <img src={nextArrow} />
//               </a>
//             );
//           }
//           return originalElement;
//         },
//         showSizeChanger: false,
//         hideOnSinglePage: true,
//         total: total,
//         pageSize: 10,
//         showTotal: (total: number) => {
//           return (
//             <div className="pagination">
//               <span className="">Showing </span>{" "}
//               <div className="page-count">
//                 <div className="page-count__content">
//                   {(state.page + 1) * 10} <img src={dropdown} />
//                 </div>{" "}
//                 out of {total}
//               </div>
//             </div>
//           );
//         },
//       }}
//       scroll={{ x: scrollX ? scrollX : 800 }}
//       locale={{
//         emptyText: (
//           <div style={{ height: "100%" }}>
//             <Empty
//               image={<div style={{ fontSize: 70 }}>🫣</div>}
//               description="No data to view."
//             />
//           </div>
//         ),
//       }}
//     />
//   );
// };

// export const DataTable = React.memo(PageTable);
