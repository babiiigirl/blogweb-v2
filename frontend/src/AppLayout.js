import { Link, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import NewPost from './NewPost';
import Post from './Post';
import PostLists from './PostLists';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import Stats from './Stats';
import { useState } from "react";

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function Posts() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      <Outlet />
    </div>
  );
}

export default function AppLayout() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function logOut() {
    setUser(null);
    navigate("/");
  }
  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/posts" style={{ padding: 5 }}>
          Posts
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
        {user && <Link to="/stats" style={{ padding: 5 }}>
          Stats
        </Link>}
        {user && <Link to="/newpost" style={{ padding: 5 }}>
          New Post
        </Link>}
        {!user && <Link to="/login" style={{ padding: 5 }}>
          Login
        </Link>}
        {user && <Link onClick={logOut} style={{padding: 5, cursor:'pointer'}}> Logout </Link>}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostLists />} />
          <Route path=":id" element={<Post />} />
        </Route>
        <Route path="/login" element={<Login onLogin={setUser}/>}/>
        <Route path="/stats" element={<ProtectedRoute user={user}><Stats/></ProtectedRoute>} />
        <Route path="/newpost" element={<ProtectedRoute user={user}><NewPost /></ProtectedRoute>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}