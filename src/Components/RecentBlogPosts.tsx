import { type Blog } from "../Types/type";
import BlogComponent from "./BlogComponent";
interface recentProps {
  end: number;
  start: number;
  Blogs: Blog[];
}
function RecentBlogPosts({ start, end, Blogs }: recentProps) {
  return (
    <div className="mt-[60px] text-primaryColor dark:text-white">
      <div className="flex flex-col items-start justify-center w-full text-2xl font-semibold">
        Recent blog posts
      </div>
      <div className="flex lg:flex-row flex-col gap-[32px] mt-[32px]">
        <div className="flex-1">
          {Blogs.slice(start, end - 3).map((blog) => {
            return (
              <BlogComponent
                blog={blog}
                key={blog.id}
                firstStyle={true}
                secondStyle={false}
                thirdStyle={false}
                allStyle={false}
                recentLastBlog={false}
              />
            );
          })}
        </div>
        <div className="flex-1 grid grid-cols-1 gap-[32px]">
          {Blogs.slice(start + 1, end - 1).map((blog) => {
            return (
              <BlogComponent
                blog={blog}
                key={blog.id}
                firstStyle={false}
                secondStyle={true}
                thirdStyle={false}
                allStyle={false}
                recentLastBlog={false}
              />
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-1 mt-[60px]">
        {Blogs.slice(start + 3, end).map((blog) => {
          return (
            <BlogComponent
              blog={blog}
              key={blog.id}
              firstStyle={false}
              secondStyle={false}
              thirdStyle={true}
              allStyle={false}
              recentLastBlog={false}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RecentBlogPosts;
