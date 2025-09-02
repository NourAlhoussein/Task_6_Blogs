import { useParams } from "react-router-dom";
import type { RootState } from "../Redux/store/index";
import { useSelector } from "react-redux";
import BlogDetails from "../Components/BlogDetails";
import RecentNineBlogs from "../Components/RecentNineBlogs";

function BlogPage() {
  const { id } = useParams();
  const Blogs = useSelector((state: RootState) => state.blogs);
  const idBlog = Number(id);

  return (
    <div className="flex flex-row lg:gap-[32px] gap-[16px] sm:mt-[160px] mt-[110px]">
      <div className="lg:flex-1 flex-1 md:flex hidden">
        <RecentNineBlogs Blogs={Blogs} />
      </div>
      <div className="lg:flex-2 flex-1">
        <BlogDetails key={idBlog} idBlog={idBlog} Blogs={Blogs} />
      </div>
    </div>
  );
}

export default BlogPage;
