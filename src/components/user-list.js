import React, { useContext } from 'react'
import { GlobalDataContext } from '../context/AppContextProvider';
import Users from './users';

export default function UserList() {
    const sitedata = useContext(GlobalDataContext);
  return (
    <div className="users-lst_box">
        {sitedata.filterUsers.length > 0 &&
            sitedata.filterUsers.map((item, i) => {
                return (
                <div className="box-item" key={i + "user-box"} 
                    onClick={() => { 
                        sitedata.setSiteData({ ...sitedata, selectedUser: item ,showSidebar: true})
                    }} >
                    <Users
                        fname={item.name.first}
                        lname={item.name.last}
                        title={item.location.country}
                        selected={item === sitedata.selectedUser ? true : false}
                    />
                </div>
            );
        })}
    </div>
  )
}
