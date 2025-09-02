import { type Blog } from "../Types/type";
import BlogComponent from "./BlogComponent";

interface blogPageProp {
  Blogs: Blog[];
}
function RecentNineBlogs({ Blogs }: blogPageProp) {
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col items-start justify-center w-full text-2xl font-semibold text-primaryColor dark:text-white">
        Recent blog posts
      </div>
      <div className="flex flex-col gap-[32px]">
        {Blogs.slice(Blogs.length - 10, Blogs.length).map((blog) => {
          return (
            <BlogComponent
              blog={blog}
              key={blog.id}
              firstStyle={false}
              secondStyle={false}
              thirdStyle={false}
              allStyle={false}
              recentLastBlog={true}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RecentNineBlogs;
