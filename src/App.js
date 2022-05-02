import { useEffect, useState } from "react";
import "./App.css";

function App({ posts }) {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const fetchRes = await res.json();
      setStatus(fetchRes);
    };
    fetchData().catch(console.error);
  }, [posts, setStatus]);

  return (
    <div className="App">
      <div>
        <h1>Hello JSON API</h1>
      </div>
      <main>
        {status.map((post) => (
          <div key={post.id} className="card">
            <h2 className="title">{post.title}</h2>
            <p className="body">{post.body}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
