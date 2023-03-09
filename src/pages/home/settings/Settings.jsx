import "./settings.css"
import Sidebar from "../../../components/sidebar/Sidebar"


export default function Settings() {
  return (
    <div className="settings">
        <div className="settingWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">
                Update your Account
            </span>
            <span className="settingsDeleteTitle">
                Delete your Account
            </span>
        </div>
        <form className="settingsForm">
            <label> Profile Picture</label>
            <div className="settingsPP">
                <img src="https://images.unsplash.com/photo-1627067227573-07bc616f46ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" 
                className="" />
                <label htmlFor="fileInput">
                <i className="settingsPPIconfa-regular fa-users"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>

            </div>
            <label>Username</label>
            <input type="text" placeholder="Allan" />
            <label>Email</label>
            <input type="email" placeholder="Allan@gmail.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
        </div>
        <Sidebar/>
        </div>
  )
}
