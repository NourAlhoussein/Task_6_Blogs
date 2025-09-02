import type { RootState } from "../Redux/store/index";
import { useSelector } from "react-redux";
import NewsLetterComponent from "../Components/NewsLetterComponent";
import AllBlogs from "../Components/AllBlogs";
function NewsLetter() {
  const Blogs = useSelector((state: RootState) => state.blogs);
  const endAll = 3;
  const startAll = 0;
  return (
    <div className="sm:mt-[160px] mt-[110px]">
      <NewsLetterComponent />
      <AllBlogs
        Blogs={Blogs}
        end={endAll}
        start={startAll}
        withPagination={false}
      />
    </div>
  );
}

export default NewsLetter;
