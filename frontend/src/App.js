import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppLayout from './AppLayout';

// function Home() {
//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Home View</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div style={{ padding: 20 }}>
//       <h2>About View</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
//     </div>
//   );
// }

// function NoMatch() {
//   return (
//     <div style={{ padding: 20 }}>
//       <h2>404: Page Not Found</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
//     </div>
//   );
// }

// function Posts() {
//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Blog</h2>
//       <Outlet />
//     </div>
//   );
// }

// function PostLists() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8080/posts")
//       .then(res => res.json())
//       .then(data => setPosts(data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>
//           <Link to={`/posts/${post.id}`}>
//             <h3>{post.title}</h3>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

// function Post() {
//   const { id } = useParams();
//   const [post, setPost] = useState(null);

//    useEffect(() => {
//     fetch(`http://localhost:8080/posts/${id}`)
//       .then(res => {
//         if (!res.ok) throw new Error("Post not found");
//         return res.json();
//       })
//       .then(data => setPost(data))
//       .catch(err => console.error(err.message));
//   }, [id]);

//   return (
//     <div>
//       <h3>{post?.title}</h3>
//       <p>{post?.description}</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <nav style={{ margin: 10 }}>
//         <Link to="/" style={{ padding: 5 }}>
//           Home
//         </Link>
//         <Link to="/about" style={{ padding: 5 }}>
//           About
//         </Link>
//         <Link to="/posts" style={{ padding: 5 }}>
//           Posts
//         </Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/posts" element={<Posts />}>
//           <Route index element={<PostLists />} />
//           <Route path=":id" element={<Post />} />
//         </Route>
//         <Route path="/about" element={<About />} />
//         <Route path="*" element={<NoMatch />} />
//       </Routes>
//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;