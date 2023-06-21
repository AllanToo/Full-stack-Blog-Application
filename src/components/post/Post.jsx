import "./post.css"
import {Link} from "react-router-dom";

export default function Post({post}) {
  return (
    <div className="post">
      <img src={post.photo} alt="" className="postImg"/>
      
        
        <div className="postInfo">
            <div className="postCats">
                  {post.categories.map((c) => (
                   <span className="postCat">{c.name}</span>
                  ))}
                    
                  
               
               
            </div>
             <Link to={`/post/${post._id}`} className="link">
             <span className="postTitle">{post.title} </span>
             </Link>
           
           
            <hr/>
            <span className="postDate">{new Date (post.createdAt).toDateString()}</span>
        <p className="postDescrip">{post.desc}</p>
        </div>
        </div>
  )
}
