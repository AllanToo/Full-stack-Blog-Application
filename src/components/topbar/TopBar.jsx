import  "./topbar.css";
import {Link} from "react-router-dom"
export default function TopBar() {

  const user = false;
  return (
    <div className="top">
       <div className="topLeft">
        <i className=" topIcon fa-brands fa-square-facebook"></i>
       <i className=" topIcon fa-brands fa-square-instagram"></i>
       <i className=" topIcon fa-brands fa-square-twitter"></i>
       </div>sjnjsfmn
       <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
            <Link  className="link" to= "/" >HOME</Link>
            </li>
            <li className="topListItem">
                <link></link>
            </li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">
                {user && "LOGOUT"}
            </li>
        </ul>
       </div>
       <div className="topRight">
        {
            user ? (
                <img className="topImg" src="https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="something" />
            ) : ( 
                <ul className="topListItem">
                    <li  className="topListItem">
                 <Link className="link" to="/login">LOGIN</Link>
                 </li>
                 <li className="topListItem">
                 <Link className="link" to="/register">REGISTER</Link>
                 </li>
                 </ul>
            )
        }
     
      
       
       </div>
   </div>
  )
}
