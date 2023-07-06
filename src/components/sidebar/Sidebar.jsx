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
     
        </div>
  )
}
