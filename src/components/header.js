import React, { useContext } from "react";
import { GlobalDataContext } from "../context/AppContextProvider";

export default function Header() {
    const sitedata = useContext(GlobalDataContext);
    
  return (
    <header data-testid="header">
      <ul>
        <li
          data-testid="mobile-nav"
          className="mobile-nav"
          onClick={() => {
            sitedata.setSiteData({...sitedata, showMenu: true})
          }}
        >
          <span className="icon-home"></span>
        </li>
        <li>
          <form className="form_group">
            <span className="search_icon">
              <span className="icon-search"></span>
            </span>

            <input id="city" name="city" placeholder="Search" type="text" />
          </form>
        </li>
        <li>
          <span className="icon-settings"></span>
        </li>
      </ul>
    </header>
  );
}
