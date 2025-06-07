import { useEffect, useState } from "react";
import "./App.css";
import { createPosts, deletePosts, scanPosts} from "./dynamo";
import PostModal from "./components/PostsModal";
import Post from "./components/Post";

function App() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    content: "",
  });

  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const data = await scanPosts();
      setPosts(data);
    }
    loadPosts();
  }, []);

  async function handleDelete(id) {
    await deletePosts(id);
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  }

  async function handleAdd() {
    const newItem = { id: crypto.randomUUID(), ...form };
    await createPosts(newItem); //call the createPost function to add a new item
    setPosts((prev) => [...prev, newItem]);

    //clear the form
    setForm({
      firstName: "",
      lastName: "",
      content: "",
    });

    setShow(false); //optionally close modal
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <div className="flex justify-center items-center p-8">
        <div className="divBg text-center p-4 max-w-lg rounded shadow ">
          <h1 className="mb-4">What line of code (or moment) stuck with you?</h1>
          <p className="">
            As we reach the end of the 2025 November cohort Level-3, take a
            moment to leave a note of something that left a lasting impression
            on you this Level.{" "}
          </p>
          <button
            onClick={() => setShow(true)}
            className="bg-gray-500 hover:bg-gray-400 text-white px-2 rounded animate-bounce"
          >
            Add Note
          </button>
        </div>
      </div>

      <PostModal
        show={show}
        onHide={() => setShow(false)}
        form={form}
        setForm={setForm}
        onSave={handleAdd}
        onChange={handleChange}
      />
      {posts.length === 0 ? (
        <h2 className="text-center text-white ">
          Unfortunately, no one has anything to share at this time!
        </h2>
      ) : (
        <div className="flex flex-wrap justify-center">
          {posts.map((post, index) => (
            <div key={post.id} className="relative">
              <Post post={post} index={index} />
              <button
                onClick={() => handleDelete(post.id)}
                className="absolute hover:bg-gray-200 top-2 right-2 bg-gray-100 text-black shadow-[4px_4px_0px_#d4a017] text-xs px-2 py-1 rounded "
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
