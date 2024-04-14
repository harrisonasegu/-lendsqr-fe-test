import users from "../../assets/icons/users.png";
import usersWithLoan from "../../assets/icons/users-with-loan.png";
import usersWithSavings from "../../assets/icons/users-with-savings.png";
import activeUsers from "../../assets/icons/active-users.png";
import "./User.scss"
import React from "react";


const Stats: React.FC = () => {
  const statistics = [
    {
      img: users,
      title: "USERS",
      value: 2543,
    },
    {
      img: activeUsers,
      title: "ACTIVE USERS",
      value: 2543,
    },
    {
      img: usersWithLoan,
      title: "USERS WITH LOAN",
      value: 12543,
    },
    {
      img: usersWithSavings,
      title: "USERS WITH SAVINGS",
      value: 102543,
    },
  ];
  
  return (
    <div className="user-statistics">
      {statistics.map((statistic, index) => (
        <section key={index} className="user-statistics__card">
          <img src={statistic.img} alt="" />
          <h3 className="user-statistics__card__title">{statistic.title}</h3>
          <h2 className="user-statistics__card__value">
            {Intl.NumberFormat().format(statistic.value)}
          </h2>
        </section>
      ))}
    </div>
  );
};

const UserStatistics = React.memo(Stats)
export default UserStatistics;
