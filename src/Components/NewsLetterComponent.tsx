function NewsLetterComponent() {
  return (
    <div>
      <div className="text-base font-normal text-[#7F56D9]">Newlatters</div>
      <div className="font-semibold sm:text-5xl text-3xl mt-[12px] text-primaryColor dark:text-white">
        Stories and interviews
      </div>
      <div className="mt-[24px] text-[#667085] dark:text-[#C0C5D0]">
        Subscribe to learn about new product features, the latest in technology,
        <span className="block">solutions, and updates.</span>
      </div>
      <div className="flex flex-col sm:items-center items-start justify-center mt-[40px]">
        <div className="flex sm:flex-row flex-col items-start justify-center w-full gap-[16px]">
          <input
            className="bg-white dark:border-0 border-1 border-[#D0D5DD] rounded-lg 
            sm:w-[360px] w-full h-[48px] pl-[16px] text-base text-[#667085] focus-visible:border-1 focus-visible:outline-0"
            type="text"
            name=""
            placeholder="Enter your email"
            id=""
          />

          <button className="bg-[#7F56D9] text-white py-[12px] px-[20px] rounded-lg cursor-pointer">
            Subscribe
          </button>
        </div>
        <div className="text-[#667085] dark:text-[#C0C5D0] text-sm mt-[8px]">
          We care about your data in our{" "}
          <span className="underline cursor-pointer">privacy policy</span>
        </div>{" "}
      </div>
    </div>
  );
}

export default NewsLetterComponent;
