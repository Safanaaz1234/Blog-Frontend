import { useEffect, useState } from "react";
import "./blog.css";
import { useParams } from "react-router-dom";
const BASE = process.env.REACT_APP_URL;

function BlogDisplay() {
  const [mydata, setMyData] = useState();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const getSingleData = async () => {
      try {
        const response = await fetch(`${BASE}/api/getSingleBlog/${id}`);
        const data = await response.json();
        console.log("data", data);
        setMyData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleData();
  }, []);
  return (
    <div className="container">
      {!mydata ? (
        <div>No data to show</div>
      ) : (
        <>
          {/* <img src={mydata.imgUrl} alt="pic" /> */}

          <h2>{mydata.title}</h2>
          <div>{mydata.content}</div>
        </>
      )}
    </div>
  );
}

export default BlogDisplay;
