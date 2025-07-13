import React from "react";
import ReactDOM from "react-dom/client";
import Posts, { loader as PostLoader } from "./Routes/Posts";
import "./index.css";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, { action as newPostAction } from "./Routes/NewPost";
import PostDeatils, {
  loader as postDetailsLoader,
} from "./components/PostDetails";
import RootLayout from "./Routes/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: PostLoader,
        children: [
          { path: "/new", element: <NewPost />, action: newPostAction },
          {
            path: ":PostId",
            element: <PostDeatils />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
