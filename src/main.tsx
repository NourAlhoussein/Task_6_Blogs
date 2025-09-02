import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store/index.ts";
import HomeBlogs from "./Pages/HomeBlogs.tsx";
import Projects from "./Pages/Projects.tsx";
import About from "./Pages/About.tsx";
import NewsLetter from "./Pages/NewsLetter.tsx";
import BlogPage from "./Pages/BlogPage.tsx";

const routers = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <HomeBlogs /> },
        { path: ":id", element: <BlogPage /> },
        { path: "/projects", element: <Projects /> },
        { path: "/about", element: <About /> },
        { path: "/newsLetter", element: <NewsLetter /> },
      ],
    },
  ],
  { basename: "/Task_6_Blogs" }
);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>
  </StrictMode>
);
