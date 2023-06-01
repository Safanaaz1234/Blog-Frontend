import Post from "../posts/Post";
import Sidebar from "../sidebar/Sidebar";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Post />
      <Sidebar />
    </div>
  );
}

export default Home;
