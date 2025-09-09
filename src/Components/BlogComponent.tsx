import { Link } from "react-router-dom";
import { type Blog } from "../Types/type";
import { MdArrowOutward } from "react-icons/md";
export interface blogProps {
  blog: Blog;
  firstStyle: boolean;
  secondStyle: boolean;
  thirdStyle: boolean;
  allStyle: boolean;
  recentLastBlog: boolean;
}
function BlogComponent({
  blog,
  firstStyle,
  secondStyle,
  thirdStyle,
  allStyle,
  recentLastBlog,
}: blogProps) {
  const cutText = (text: string, length: number) => {
    const words = text.split(" ");
    if (words.length <= length) {
      return text;
    } else {
      return words.slice(0, length).join(" ") + "...";
    }
  };
  const goToZeroScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`flex ${
        firstStyle
          ? "flex-col gap-[32px]"
          : secondStyle
          ? "sm:flex-row flex-col gap-[24px]"
          : thirdStyle
          ? "lg:flex-row flex-col gap-[32px]"
          : allStyle
          ? "flex-col justify-start gap-[32px]"
          : recentLastBlog
          ? "flex-col justify-start gap-[32px]"
          : ""
      }`}
    >
      <div
        className={`${
          firstStyle ? "" : secondStyle ? "flex-1" : thirdStyle ? "flex-1" : ""
        }`}
      >
        <img
          className={`transition-all duration-300 ease-in-out hover:scale-[1.05] ${
            firstStyle
              ? "w-full h-[228px]"
              : secondStyle
              ? "w-full h-[200px]"
              : thirdStyle
              ? "flex-1 w-full h-[246px]"
              : allStyle
              ? "w-full h-[240px]"
              : recentLastBlog
              ? "w-full h-[240px]"
              : ""
          }`}
          src={blog.image}
          alt=""
        />
      </div>
      <div
        className={`flex flex-col items-start justify-start ${
          firstStyle ? "" : secondStyle ? "flex-1" : thirdStyle ? "flex-1" : ""
        }`}
      >
        <div
          className={`flex flex-row font-semibold text-[#6941C6] ${
            firstStyle
              ? "text-sm"
              : secondStyle
              ? "xl:text-[10px] lg:text-[8px]"
              : thirdStyle
              ? "xl:text-sm"
              : ""
          }`}
        >
          <div>{blog.name}</div>
          <div>{blog.date}</div>
        </div>
        <div
          className={`flex flex-row items-center justify-between w-full mt-[12px] text-start font-semibold
            ${
              firstStyle
                ? "sm:text-2xl text-lg"
                : secondStyle
                ? "xl:text-base sm:text-xs text-lg"
                : thirdStyle
                ? "sm:text-2xl text-lg"
                : allStyle
                ? "text-primaryColor dark:text-white"
                : recentLastBlog
                ? "text-primaryColor dark:text-white"
                : ""
            }`}
        >
          {blog.title}

          <Link
            to={`/${blog.id}`}
            className="transition-all duration-300 ease-in-out hover:scale-[1.5]"
            onClick={goToZeroScroll}
          >
            <MdArrowOutward />
          </Link>
        </div>
        <div
          className={`text-base font-normal text-left text-[#667085] dark:text-[#C0C5D0] mt-[12px] 
            ${
              firstStyle
                ? ""
                : secondStyle
                ? "lg:text-sm"
                : thirdStyle
                ? ""
                : ""
            }`}
        >
          {firstStyle
            ? cutText(blog.description[0], 20)
            : secondStyle
            ? cutText(blog.description[0], 20)
            : thirdStyle
            ? cutText(blog.description[0], 70)
            : allStyle
            ? cutText(blog.description[0], 20)
            : recentLastBlog
            ? cutText(blog.description[0], 20)
            : ""}
        </div>
        <div className="flex flex-wrap items-center justify-start gap-[8px] mt-[12px]">
          {blog.label.map((label) => {
            return (
              <div
                className={`${label.bgColor} ${label.color} cursor-pointer text-sm font-medium py-[2px] px-[10px] rounded-2xl`}
              >
                {label.tag}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogComponent;
