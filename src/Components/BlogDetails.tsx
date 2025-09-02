import { type Blog } from "../Types/type";
import NewsLetterComponent from "./NewsLetterComponent";
// import BlogDetailsComponent from "./BlogDetailsComponent";
interface detailsProp {
  idBlog: number;
  Blogs: Blog[];
}
function BlogDetails({ Blogs, idBlog }: detailsProp) {
  const blog = Blogs.find((b) => b.id === idBlog);
  console.log(blog);
  return (
    <div className="flex flex-col gap-[32px] text-primaryColor dark:text-white">
      <div className="text-[#6941C6] font-semibold text-left text-sm">
        {blog?.date}
      </div>
      <div className="text-4xl font-bold text-left">{blog?.title}</div>
      <div className="w-full">
        <img className="w-full" src={blog?.image} alt="" />
      </div>
      <div
        className="dark:text-[#C0C5D0] text-[#667085] text-base font-normal text-left
"
      >
        {blog?.description}
        {/* <BlogDetailsComponent details={blog?.details} /> */}

        {blog?.details?.map((detail, index) => {
          return (
            <div key={index}>
              <div className="text-lg font-bold text-[#667085] dark:text-[#C0C5D0] mt-[12px]">
                {detail.title}
              </div>
              <div className="text-base font-bold text-[#667085] dark:text-[#C0C5D0] mt-[12px]">
                {detail.example}
              </div>

              {detail?.paragraphs?.map((pp, index) => {
                if (
                  typeof pp.text === "string" &&
                  pp.span &&
                  pp.text.includes(pp.span)
                ) {
                  // split text around the span text
                  const parts = pp.text.split(pp.span);
                  return (
                    <p key={index} className="mt-[12px]">
                      {parts[0]}
                      <span className={`font-${pp.spanStyle}`}>{pp.span}</span>
                      {parts[1]}
                    </p>
                  );
                }

                if (Array.isArray(pp.text)) {
                  return (
                    <ul key={index} className="list-disc mt-[12px] ml-[30px]">
                      {pp.text.map((item, i) => {
                        if (pp.span && item.includes(pp.span)) {
                          const parts = item.split(pp.span);
                          return (
                            <li key={i}>
                              {parts[0]}
                              <span className={`font-${pp.spanStyle}`}>
                                {pp.span}
                              </span>
                              {parts[1]}
                            </li>
                          );
                        }
                        return <li key={i}>{item}</li>;
                      })}
                    </ul>
                  );
                }
                // default case (no span inside text)
                return (
                  <p key={index} className="mt-[12px]">
                    {pp.text}
                  </p>
                );
              })}
              <div className="w-full mt-[12px]">
                <img className="w-full" src={detail.blogImage} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center text-center text-base mt-[12px] italic">
                <div className="w-[80%]">{detail.ImageDescription}</div>
              </div>

              {detail?.paragraphs01?.map((p, index) => {
                return (
                  <div
                    key={index}
                    className="mt-[12px] text-[#667085] dark:text-[#C0C5D0]"
                  >
                    {p.text}
                  </div>
                );
              })}

              {detail?.paragraph02?.map((p, index) => {
                return (
                  <div key={index} className="font-bold">
                    {p}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <NewsLetterComponent />
    </div>
  );
}

export default BlogDetails;
