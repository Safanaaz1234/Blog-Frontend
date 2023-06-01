import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
const BASE = process.env.REACT_APP_URL;
function EditBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const getSingleData = async () => {
      try {
        const response = await fetch(`${BASE}/api/getSingleBlog/${id}`);
        const data = await response.json();
        setTitle(data.title);
        setContent(data.content);
        setImgUrl(data.imgUrl);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleData();
  }, []);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${BASE}/api/updateBlog/${encodeURIComponent(id)}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            content,
            imgUrl,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      setContent("");
      setImgUrl("");
      setTitle("");
      console.log(
        `http://localhost:4000/api/updateBlog/${encodeURIComponent(id)}`
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form onSubmit={handleEdit}>
        <input
          type="text"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content..."
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Image Url"
          required
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <div>
          <button type="submit">Edit</button>
        </div>
      </form>
    </>
  );
}

export default EditBlog;
