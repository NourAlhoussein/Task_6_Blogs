import TitleComponent from "../Components/TitleComponent";
import type { RootState } from "../Redux/store/index";
import { useSelector } from "react-redux";
import RecentBlogPosts from "../Components/RecentBlogPosts";
import AllBlogs from "../Components/AllBlogs";
function HomeBlogs() {
  const Blogs = useSelector((state: RootState) => state.blogs);
  const endRecent = Blogs.length;
  const startRecent = Blogs.length - 4;
  const endAll = 3;
  const startAll = 0;
  return (
    <div>
      <TitleComponent />
      <RecentBlogPosts Blogs={Blogs} end={endRecent} start={startRecent} />
      <AllBlogs
        Blogs={Blogs}
        end={endAll}
        start={startAll}
        withPagination={true}
      />
    </div>
  );
}

export default HomeBlogs;
