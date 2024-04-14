/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dropdown, MenuProps } from "antd";
import { ColumnProps } from "antd/es/table";
import { Apiresponse } from "../../model/client/response";
import { routePath, userStatus } from "../../utils/helper";
import Filter from "./Filter";
import more from "../../assets/icons/more.png";
import filterIcon from "../../assets/icons/filter-btn.png";
import { useNavigate } from "react-router-dom";

interface ColumnConfiguration {
  column: ColumnProps<Apiresponse.Users>[];
}

const useColumn = (
  setFilters: any,
  filters: any,
  items: MenuProps["items"]
): ColumnConfiguration => {
  const navigate = useNavigate();

  const column: ColumnProps<Apiresponse.Users>[] = [
    {
      title: "ORGANIZATION",
      dataIndex: "organization",
      key: "1",
      ellipsis: true,
      filterDropdown: ({ clearFilters, confirm }: any) => {
        return (
          <Filter
            setFilters={setFilters}
            filters={filters}
            clearFilters={clearFilters}
            confirm={confirm}
          />
        );
      },
      filterIcon: () => <img src={filterIcon} alt="" />,
      render: (_, record: Apiresponse.Users) => {
        return <p>{record.personalInformation?.organization}</p>;
      },
    },
    {
      title: "USERNAME",
      dataIndex: "username",
      key: "2",
      ellipsis: true,
      filterDropdown: ({ clearFilters, confirm }) => {
        return (
          <Filter
            setFilters={setFilters}
            filters={filters}
            clearFilters={clearFilters as any}
            confirm={confirm}
          />
        );
      },
      filterIcon: () => <img src={filterIcon} alt="" />,
      render: (_, record: Apiresponse.Users) => {
        return <p>{record.personalInformation?.username}</p>;
      },
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "3",
      ellipsis: true,
      filterDropdown: ({ clearFilters, confirm }: any) => {
        return (
          <Filter
            setFilters={setFilters}
            filters={filters}
            clearFilters={clearFilters}
            confirm={confirm}
          />
        );
      },
      filterIcon: () => <img src={filterIcon} alt="" />,
      render: (_, record: Apiresponse.Users) => {
        return <p>{record.personalInformation?.email}</p>;
      },
    },
    {
      title: "PHONE NUMBER",
      dataIndex: "phoneNumber",
      key: "4",
      ellipsis: true,
      filterDropdown: ({ clearFilters, confirm }: any) => {
        return (
          <Filter
            setFilters={setFilters}
            filters={filters}
            clearFilters={clearFilters}
            confirm={confirm}
          />
        );
      },
      filterIcon: () => <img src={filterIcon} alt="" />,
      render: (_, record: Apiresponse.Users) => {
        return <p>{record.personalInformation?.phoneNumber}</p>;
      },
    },
    {
      title: "DATE JOINED",
      dataIndex: "dateJoined",
      key: "5",
      ellipsis: true,
      width: "12rem",
      filterDropdown: ({ clearFilters, confirm }: any) => {
        return (
          <Filter
            setFilters={setFilters}
            filters={filters}
            clearFilters={clearFilters}
            confirm={confirm}
          />
        );
      },
      filterIcon: () => <img src={filterIcon} alt="" />,
      render: (_, record: Apiresponse.Users) => {
        return (
          <p>{`${new Date(
            record.personalInformation?.dateJoined?.split(" ")[0]
          ).toDateString()} ${new Date(
            record.personalInformation?.dateJoined?.split(" ")[0]
          ).toLocaleTimeString()}`}</p>
        );
      },
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "6",
      ellipsis: true,
      filterDropdown: ({ clearFilters, confirm }: any) => {
        return (
          <Filter
            setFilters={setFilters}
            filters={filters}
            clearFilters={clearFilters}
            confirm={confirm}
          />
        );
      },
      filterIcon: () => <img src={filterIcon} alt="" />,
      render: (_, record: Apiresponse.Users) => {
        return (
          <p
            style={{
              color:
                record?.personalInformation?.status?.toLowerCase() ===
                userStatus.ACTIVE
                  ? "#39CD62"
                  : record.personalInformation?.status?.toLowerCase() ===
                    userStatus.BLACKLISTED
                  ? "#E4033B"
                  : record.personalInformation?.status?.toLowerCase() ===
                    userStatus.INACTIVE
                  ? "#545F7D"
                  : "#E9B200",
              backgroundColor:
                record.personalInformation?.status?.toLowerCase() ===
                userStatus.ACTIVE
                  ? "#39CD6210"
                  : record.personalInformation?.status?.toLowerCase() ===
                    userStatus.BLACKLISTED
                  ? "#E4033B10"
                  : record.personalInformation?.status?.toLowerCase() ===
                    userStatus.INACTIVE
                  ? "#545F7D10"
                  : "#E9B20010",
              textAlign: "center",
              borderRadius: "100px",
              padding: "5px 15px",
              width: "fit-content",
            }}
          >
            {record.personalInformation?.status}
          </p>
        );
      },
    },
    {
      key: "6",
      ellipsis: true,
      fixed: "right",
      width: "50px",
      render: (_, record: Apiresponse.Users) => {
        return (
          <Dropdown
            trigger={["click", "hover"]}
            rootClassName="dropdown"
            overlayClassName="dropdown"
            placement="bottomLeft"
            menu={{
              items,
              onClick: (e) => {
                if (e.key === "1") {
                  navigate(routePath.UserDetails + record._id);
                }
              },
            }}
          >
            <button type="button">
              <img src={more} />
            </button>
          </Dropdown>
        );
      },
    },
  ];

  return {
    column,
  };
};

export default useColumn;
