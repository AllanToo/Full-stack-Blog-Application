import "./post.css"
import {Link} from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:7000/images/";
  return (
    <div className="post">
       {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
      </div>
       <Link to={`/post/${post._id}`} className="link">
       <p className="postDesc">{post.desc}</p>
        </Link>
      
      
    </div>
  );
}