import React from "react";
import "./post.css";
// import Sdata from "./Sdata";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BASE = process.env.REACT_APP_URL;

function Post() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${BASE}/api/getBlogs`);
        const data = await response.json();
        setInfo(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
    console.log("Base", BASE);
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `${BASE}/api/deleteBlog/${encodeURIComponent(id)}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.success) {
        toast(data.message);
      } else {
        toast(data.message);
      }
      console.log(
        `http://localhost:4000/api/deleteBlog/${encodeURIComponent(id)}`
      );
      console.log(BASE);
      setInfo((prevData) => prevData.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="post">
        {info.map((item) => (
          <div className="postCard" key={item._id}>
            <Link to={`/blog/${item._id}`}>
              <div className="postImg">
                <img src={item.imgUrl} alt="post" />
              </div>
            </Link>
            <div className="content">
              <h3>{item.title}</h3>
              <div>{item.content.slice(0, 150) + "......"}</div>
              <div className="options">
                <Link
                  to={{ pathname: `/edit/${item._id}` }}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginTop: "3px",
                    marginRight: "6px",
                  }}
                >
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </Link>
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  onClick={() => handleDelete(item._id)}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  );
}

export default Post;
