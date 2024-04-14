import { Button, Divider, Rate, Spin, Tabs, TabsProps } from "antd";
import useFetchSignleUser from "../../hooks/useFetchSingleUser";
import { useAppSelector } from "../../store/hooks";
import arrowBack from "../../assets/icons/arrow-back-outline.svg";
import avatar from "../../assets/icons/big-avatar.png";
import { useNavigate } from "react-router-dom";
import { routePath } from "../../utils/helper";
import { Apiresponse } from "../../model/client/response";
import GeneralDetails from "./GeneralDetails";
import "./User.scss";
import React from "react";
import EmptyData from "./EmptyData";

const Details: React.FC = () => {
  const state = useAppSelector((state) => {
    return state.app;
  });

  document.title = state.record?.personalInformation?.username + " - Lendsqr";
  const navigate = useNavigate();
  const data: Apiresponse.Users = state.record;

  useFetchSignleUser();

  const items: TabsProps["items"] = [
    {
      label: "General Details",
      key: "1",
      children: <GeneralDetails data={data} />,
    },
    {
      label: "Documents",
      key: "2",
      children: <EmptyData description="No documents yet." />
    },
    {
      label: "Bank Details",
      key: "3",
      children: <EmptyData description="No bank details yet." />
    },
    {
      label: "Loans",
      key: "4",
      children: <EmptyData description="No loans applied yet." />
    },
    {
      label: "Savings",
      key: "5",
      children: <EmptyData description="Too bad, no savings yet." />
    },
    {
      label: "App and System",
      key: "6",
      children: <EmptyData description="No configurations yet." />
    },
  ];

  return (
    <div className="users">
      <Spin
        spinning={state.record === undefined}
        fullscreen={state.record === undefined}
      >
        <div style={{display: "flex", alignItems: "center", gap: 15, color: "#545F7D"}}>
          <button className="back" onClick={() => navigate(routePath.User)}>
            <img src={arrowBack} alt="" />
          </button>
            <p>Back to users</p>
        </div>
        <div className="users__header">
          <h1 className="users__heading">User Details</h1>
          <div className="users__header__action">
            <Button className="users__header__action__blacklist">
              BLACKLIST USER
            </Button>
            <Button className="users__header__action__activate">
              ACTIVATE USER
            </Button>
          </div>
        </div>
        <section className="users__user">
          <div className="users__user__user-bio-wrapper">
            <div className="users__user__user-bio">
              <img src={avatar} alt="" className="users__user__avatar" />
              <div>
                <h1 className="users__user__name">
                  {data?.personalInformation?.username}
                </h1>
                <p className="users__user__code">
                  {data?._id?.slice(0, 11).toUpperCase()}
                </p>
              </div>
            </div>
            <Divider
              orientation="center"
              type="vertical"
              className="users__user__divider"
            />
            <div className="users__user_user-bio users__user__more">
              <h3 className="users__user__tier">User's Tier</h3>
              <Rate count={3} value={Math.floor(Math.random() * 3)} disabled />
            </div>
            <Divider
              orientation="center"
              type="vertical"
              className="users__user__divider"
            />
            <div className="users__user_user-bio users__user__more">
              <h1 className="users__user__name">
                ₦{Intl.NumberFormat().format(data?.bankInformation?.amount)}
              </h1>
              <p className="users__user__code">
                {data?.bankInformation?.accountNo}/
                {data?.bankInformation?.bankName}
              </p>
            </div>
          </div>
          <div className="users__user__menu">
            <Tabs items={items} />
          </div>
        </section>
      </Spin>
    </div>
  );
};

const UserDetails = React.memo(Details);
export default UserDetails;
