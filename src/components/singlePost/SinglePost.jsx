import "./singlePost.css"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] =useState({})
    useEffect(()=>{
        const getPost = async()=>{
            const res = await axios.get("http://localhost:5000/api/posts" + path)
        };
        getPost();
    }, [path]);
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            {post.photo && (<img src=" https://images.pexels.com/photos/15234266/pexels-photo-15234266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="" className="singlePostImg"/>
            )}
         
            <h1 className="singlePostTitle">{post.title}
                <div className="singlePostEdit">
                <i className=" singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-regular fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>{post.username}</b></span>
                <span className="singlePostDate">{new Date (post.createdAt).toDateString()}</span>
            </div>
            <p className="singlePostDesc">{post.desc}</p>
          
        </div>
        </div>
  )
}
