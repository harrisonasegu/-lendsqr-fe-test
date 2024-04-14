/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from "../../common/components/DataTable";
import { useAppSelector } from "../../store/hooks";
import useRetriveDataFromStorage from "../../hooks/useRetriveDataFromStorage";
import React, { useState } from "react";
import moment from "moment";
import useColumn from "./column";
import TableMoreItems from "./TableMoreItems";
import "./User.scss";
import useFilter from "../../hooks/useFilter";

const ListData: React.FC = () => {
  const state = useAppSelector((state) => {
    return state.app;
  });
  const [filters, setFilters] = useState({
    organization: "",
    username: "",
    email: "",
    phoneNumber: "",
    status: "",
    dateJoined: "",
  });

  const { items } = TableMoreItems();

  const { column } = useColumn(setFilters, filters, items);

  //   Hook to retrieve the user list stored in the localstorage
  useRetriveDataFromStorage();

  const filteredData = Array.isArray(state.users)
    ? state.users?.filter((user) => {
      const filteredDate = new Date(filters.dateJoined)
             return (
          (!filters.organization ||
            user.personalInformation?.organization.includes(
              filters.organization
            )) &&
          (!filters.username ||
            user.personalInformation?.username.includes(filters.username)) &&
          (!filters.email ||
            user.personalInformation?.email.includes(filters.email)) &&
          (!filters.phoneNumber ||
            user.personalInformation?.phoneNumber.includes(
              filters.phoneNumber
            )) &&
          (!filters.status ||
            user.personalInformation?.status?.toLowerCase() ===
              filters.status?.toLowerCase()) &&
          (!filters.dateJoined || moment(user.personalInformation?.dateJoined, 'YYYY-MM-DDTHH:mm:ss Z').isSame(
            moment(filteredDate),
            'day'
          ))
        );
      })
    : [];

  const { dataSource } = useFilter(filteredData)

  return (
    <div className="user-table">
      <DataTable column={column} dataSource={dataSource} />
    </div>
  );
};

const UserList = React.memo(ListData)
export default UserList;
