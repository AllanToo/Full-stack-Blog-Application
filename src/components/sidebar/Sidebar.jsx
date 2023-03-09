import "./sidebar.css"

export default function Sidebar() {
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
            <li className="sideBarListItem">Life</li>
            <li className="sideBarListItem">Music</li>
            <li className="sideBarListItem">Style</li>
            <li className="sideBarListItem">Sport</li>
            <li className="sideBarListItem">Tech</li>
            <li className="sideBarListItem">Cinema</li>
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
