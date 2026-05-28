import { useState } from "react";

const posts = [
  {
    id: 0,
    title: "React is fun",
    author: "Rashid",
    content: "Start learning the React. It's great beleive me.",
  },
  {
    id: 1,
    title: "Faith, Emotions and Desires",
    author: "Think and Grow Rich",
    content:
      "when these three combined then nothing can stop you to achieve your goal",
  },
  {
    id: 2,
    title: "WhatsApp integrations",
    author: "Rahid",
    content:
      "Whatsapp integrations help you to scale your business and get more sales",
  },
];

function CTA({ title, color, para = "This is the default message" }) {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <button style={{ color }}> {title}</button>
      <p>{para}</p>
      <button onClick={handleCount}>Like</button>
      <span>Like count: {count}</span>
    </>
  );
}

function Section({ children }) {
  return <section style={{ backgroundColor: "#848484" }}>{children}</section>;
}

function PostCard({ post }) {
  const [showContent, setShowContent] = useState(false);

  function handleShowContent() {
    setShowContent(!showContent);
  }

  return (
    <li>
      <h3>{post.title}</h3>
      <span>
        <i>{post.author}</i>
      </span>
      <p>{post.content.length < 60 || showContent ? post.content : post.content.slice(0, 60) + "..." }</p>
      {post.content.length > 60 ? (
        <button onClick={handleShowContent}>
          {showContent ? "click to collapse" : "click to expand"}
        </button>
      ) : (
        null
      )}
    </li>
  );
}

function App() {
  const postLists = posts.map((post) => <PostCard key={post.id} post={post} />);

  return (
    <>
      <Section>
        <h1>The Best Platform to write blogs and gets out what inside you</h1>
        <CTA title={"sign up now"} color={"#FF0000"} />
      </Section>
      <Section>
        <p>
          This is the best platform to straight your idea to million of people
        </p>
      </Section>
      <Section>
        <p>It provides you the best feature rich editors to write blogs</p>
        <CTA
          title={"get it done"}
          color={"#0400ff"}
          para={"THis is how it dones"}
        />
      </Section>
      <Section>
        <h2>All Posts</h2>
        <ol>{postLists}</ol>
      </Section>
    </>
  );
}

export default App;
