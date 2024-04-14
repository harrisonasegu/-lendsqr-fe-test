import { Menu } from "antd";
import users from "../../../assets/icons/user-menu.png";
import { NavLink } from "react-router-dom";
import { routePath } from "../../../utils/helper";
import { useAppSelector } from "../../../store/hooks";

const SideBar: React.FC = () => {
    const state = useAppSelector(state => {
        return state.app
    })
  return (
    <nav className="sidebar">
      <h2 className="sidebar__menu-title">CUSTOMERS</h2>
      <Menu
      selectedKeys={[state.selectedKey]}
        items={[
          {
            label: (
              <NavLink to={routePath.User} className="sidebar__menu__item">
                Users
              </NavLink>
            ),
            icon: <img src={users} />,
            key: "1",
            onClick: (e) => console.log(e),
          },
        ]}
      />
    </nav>
  );
};

export default SideBar;
