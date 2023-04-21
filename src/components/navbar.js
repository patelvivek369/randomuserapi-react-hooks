import React, { useContext } from 'react'
import { GlobalDataContext } from '../context/AppContextProvider';
import menuItems from '../data/menu-list';
import MenuItem from './menu-item';
import Users from './users';

export default function Navbar() {
    const sitedata = useContext(GlobalDataContext);
  return (
    <nav data-testid="navbar" className={sitedata.showMenu ? "show" : ""}>
        <div
          data-testid="close-btn"
          className="close-btn"
          onClick={() => {
            sitedata.setSiteData({...sitedata, showMenu: false})
          }}
        >
          <span className="icon-home"></span>
        </div>
        <Users
          fname="Firstname"
          lname="LastName"
          title="Developer"
          col={true}
        />
        <div className="nav-list">
          <ul>
            {menuItems &&
              menuItems.map((item, i) => {
                return (
                  <li key={"menu-item" + i} data-testid={`menu-item-${item.icon}`}>
                    {" "}
                    <MenuItem name={item.name} icon={item.icon} path={item.path}/>{" "}
                  </li>
                );
              })}
          </ul>
        </div>
      </nav>
  )
}
