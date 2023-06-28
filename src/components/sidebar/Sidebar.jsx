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
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://images.pexels.com/photos/3098619/pexels-photo-3098619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem adipisci, quisquam optio delectus aperiam eligendi ea enim nobis alias temporibus sapiente eum est, similique modi error quia nihil dolorum reprehenderit.</p>
      </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sideBarList">
              {cats.map((c)=>(
                <Link to={`/?cat=${c.name}`} className="link">
                <li className="sideBarListItem">{c.name}</li>
                </Link>
             
              ))}
           
            
            </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>

        <div className="sideBarSocial">
        <i className=" topIcon fa-brands fa-square-facebook"></i>
       <i className=" topIcon fa-brands fa-square-instagram"></i>
       <i className=" topIcon fa-brands fa-square-twitter"></i>
        </div>
        </div>
        </div>
  )
}
