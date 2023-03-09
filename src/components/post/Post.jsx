import "./post.css"
import {Link} from "react-router-dom";

export default function Post({post}) {
  return (
    <div className="post">
      <img src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg" alt="" className="postImg"/>
      
        
        <div className="postInfo">
            <div className="postCats">
              
                     <span className="postCat">Music</span>
                     <span className="postCat">Technology</span>
               
               
            </div>
          
            <span className="postTitle">Title </span>
           
            <hr/>
            <span className="postDate">2 hours ago</span>
        <p className="postDescrip">Post Description</p>
        </div>
        </div>
  )
}
