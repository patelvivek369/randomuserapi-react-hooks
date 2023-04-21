import { useState, useEffect } from 'react'

export const useAppData = () => {
    
    // const userInitialState = JSON.parse(localStorage.getItem("sitedata")) || 
    const userInitialState = 
    {
      users: [],
      filterUsers: [],
      titles: [],
      showSidebar: false,
      showMenu: false,
      selectedUser: {
        cell: '',
        email: '',
        name: {
          first: '',
          last: ''
        },
        location: {
          country: '',
          city: ''
        }
      }
    };
    const [sitedata, setSiteData] = useState(userInitialState);
    
    useEffect(() => {
      localStorage.setItem("sitedata", JSON.stringify(sitedata));
    }, [sitedata]);
    useEffect(() => {
      const getData = async () => {
        let url = "https://randomuser.me/api/?results=10";
        let data = await fetch(url);
        let parsedData = await data.json();
        setSiteData({...sitedata, users: parsedData.results, filterUsers: parsedData.results})
      };
      getData()
    }, []);

    let list = ['All']
      sitedata.users.forEach((element) => {
        if (!list.includes(element.location.country)) {
          list.push(element.location.country);
        }
    });
    const computed = {
      titles: list,
      // OTHER DERIVED PROPERTIES
    }

    return { ...sitedata, setSiteData, computed }
}
