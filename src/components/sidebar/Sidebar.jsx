import { useState, useEffect } from "react"
import "./sidebar.css"
import { Link } from "react-router-dom";
import axios from "axios";

export default function Sidebar() {
  const [cats,setCats] =useState([]);
  useEffect(() => {
    const getCats = async ()=>{
      const res = await axios.get("/categories");
      setCats(res.data);
    }
    getCats();
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        
     
       
      </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">Discover more of what matters to you</span>
            <ul className="sideBarList">
              {cats.map((c)=>(
                <Link to={`/?cat=${c.name}`} className="link">
                <li className="sideBarListItem">{c.name}</li>
                </Link>
             
              ))}
           
            
            </ul>
        </div>
        <div className="sidebarItem">
       

        <div className="sideBarSocial">
       
        </div>
        </div>
        </div>
  )
}
