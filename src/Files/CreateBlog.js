import "./style.css";
import { useState } from "react";
import TopBar from "../topbar/TopBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BASE = process.env.REACT_APP_URL;
function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE}/api/createBlog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          imgUrl,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        toast(data.message);
      } else {
        toast(data.message);
      }
      setContent("");
      setImgUrl("");
      setTitle("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <TopBar />
      <form onSubmit={handleUpload}>
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
          <button type="submit">Upload</button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}

export default CreateBlog;
