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
            const res = await axios.get("/posts/" + path)
            setPost(res.data)
        };
        getPost();
    }, [path]);
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
           
         
            <h1 className="singlePostTitle">{post.title}
                <div className="singlePostEdit">
                <i className=" singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-regular fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">{post.username}</span>
                <span className="singlePostDate">sdfsdf</span>
            </div>
            <p className="singlePostDesc">{post.desc}</p>
          
        </div>
        </div>
  )
}
