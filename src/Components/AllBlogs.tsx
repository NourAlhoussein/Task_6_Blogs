import { useState } from "react";
import { type Blog } from "../Types/type";
import BlogComponent from "./BlogComponent";
import { MdOutlineArrowBack } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";
interface recentProps {
  end: number;
  start: number;
  withPagination: boolean;
  Blogs: Blog[];
}

function AllBlogs({ Blogs, end, start, withPagination }: recentProps) {
  const itemPerPage = 6;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(Blogs.length / itemPerPage);
  const startIndex = (page - 1) * itemPerPage;
  const endIndex = page * itemPerPage;
  const currentBlogs = Blogs.slice(startIndex, endIndex);
  return (
    <div className="mt-[60px] text-primaryColor dark:text-white">
      <div className="flex flex-col items-start justify-center w-full text-2xl font-semibold">
        All blog posts
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[32px] mt-[32px]">
        {withPagination
          ? currentBlogs.map((blog) => {
              return (
                <BlogComponent
                  blog={blog}
                  key={blog.id}
                  firstStyle={false}
                  secondStyle={false}
                  thirdStyle={false}
                  allStyle={true}
                  recentLastBlog={false}
                />
              );
            })
          : Blogs.slice(start, end).map((blog) => {
              return (
                <BlogComponent
                  blog={blog}
                  key={blog.id}
                  firstStyle={false}
                  secondStyle={false}
                  thirdStyle={false}
                  allStyle={true}
                  recentLastBlog={false}
                />
              );
            })}
      </div>

      {withPagination ? (
        <div className="bg-primaryColor dark:bg-white w-full h-[1px] my-[32px]"></div>
      ) : (
        ""
      )}

      {/* pagination control */}

      {/*previews button */}
      {withPagination ? (
        <div className="flex sm:flex-row flex-col items-center justify-between sm:gap-0 gap-[20px] w-full">
          <button
            className="flex flex-row items-center justify-center gap-[5px] text-sm cursor-pointer"
            disabled={page === 1}
            onClick={() => {
              setPage((prev) => prev - 1);
            }}
          >
            <span>
              <MdOutlineArrowBack />
            </span>
            Previews
          </button>

          {/* Page numbers */}
          <div>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-2 mx-[10px] rounded-lg cursor-pointer text-sm ${
                  page === i + 1
                    ? "bg-[#F9F5FF] dark:bg-white dark:text-primaryColor text-primaryColor "
                    : ""
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          {/*next button */}
          <button
            className="flex flex-row items-center justify-center gap-[5px] cursor-pointer text-sm"
            disabled={endIndex >= Blogs.length}
            onClick={() => {
              setPage((prev) => prev + 1);
            }}
          >
            Next
            <span>
              <MdOutlineArrowForward />
            </span>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AllBlogs;
