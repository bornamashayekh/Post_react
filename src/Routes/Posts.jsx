import PostsList from "../components/PostsList";
import { Outlet, useLoaderData } from "react-router-dom";

function Posts() {
  const posts = useLoaderData();

  return (
    <>
      <Outlet />
      <main>
        <PostsList posts={posts} />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
