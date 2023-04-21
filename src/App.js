import React, { useContext } from "react";
import './styles/app.scss';
import { GlobalDataContext } from "./context/AppContextProvider";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import UserList from "./components/user-list";

function App() {
  const sitedata = useContext(GlobalDataContext);
  const {computed: { titles }} = sitedata;

  const selectOptionChange = (e) => {
    if (e.target.value === "All") {
      sitedata.setSiteData({ ...sitedata, selectedUser: sitedata.users[0], filterUsers: sitedata.users})
    } else {
      const filt = sitedata.users.filter(
        (item) => item.location.country === e.target.value
      );
      if (filt.length > 0) 
        sitedata.setSiteData({ ...sitedata, selectedUser: filt[0], filterUsers: filt})
    }
  };
  return (
    <div className="wrapper">
      <Navbar/>
      <main>
        <Header/>
        <div className="users">
          <section className="users-lst">
            <h1>Users</h1>
            <p className="sub-title">
              If you ant to get contact information to specific users, select a
              group and then select them from the list below
            </p>
            <div className="filter">
              <span>Select group of users</span>
              <select
                data-testid="filter-dropdown"
                name="type"
                id="type"
                onChange={(e) => {
                  selectOptionChange(e);
                }}
              >
                {titles &&
                  titles.map((item, i) => {
                    return (
                      <option value={item} key={i + "selected"}>
                        {item}
                      </option>
                    );
                  })}
              </select>
            </div>
            <UserList/>
          </section>
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
