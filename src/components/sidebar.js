import React, { useContext } from 'react'
import { GlobalDataContext } from '../context/AppContextProvider';
import Users from './users';

export default function Sidebar() {
  const sitedata = useContext(GlobalDataContext);
//   const { selectedUser } = sitedata
  return (
    <aside
        data-testid="users-details"
        className={sitedata.showSidebar ? "users-details show" : "users-details"}
    >
        <div className="users-details_banner">
        <div
            className="close-btn"
            onClick={() => {
                sitedata.setSiteData({ ...sitedata, showSidebar: false})
            }}
        >
            <span className="icon-home"></span>
        </div>
        <Users
            fname={sitedata.selectedUser.name.first}
            lname={sitedata.selectedUser.name.last}
            title={sitedata.selectedUser.location.country}
            col={true}
        />
        </div>
        <div className="users-details_body">
        <div className="item">
            <p>City</p>
            <span>{sitedata.selectedUser.location.city}</span>
        </div>
        <div className="item">
            <p>Cell</p>
            <span>{sitedata.selectedUser.cell}</span>
        </div>
        <div className="item">
            <p>Email</p>
            <span>{sitedata.selectedUser.email}</span>
        </div>
        </div>
    </aside>
  )
}
