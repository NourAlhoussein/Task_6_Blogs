import Items from "../Data/Footer";
import { FaRegCopyright } from "react-icons/fa";
function Footer() {
  return (
    <div className="flex sm:flex-row flex-col-reverse items-center py-[30px] mt-[30px]">
      <div className="flex flex-row items-center md:text-xl text-base sm:mt-0 mt-[30px] text-primaryColor dark:text-white ">
        <span className="pr-[5px]">
          <FaRegCopyright />
        </span>
        2025
      </div>
      <div className="flex sm:flex-row flex-col">
        {Items.map((item) => {
          return (
            <div
              key={item.id}
              className="md:text-xl text-base font-normal text-primaryColor dark:text-white sm:px-[14px] sm:py-0 py-[14px] cursor-pointer"
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
