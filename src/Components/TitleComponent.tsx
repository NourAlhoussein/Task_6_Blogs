import { motion } from "framer-motion";
function TitleComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sm:mt-[140px] mt-[75px] uppercase text-primaryColor dark:text-white 
    font-bold xl:text-[200px]
    lg:text-[150px] sm:text-[115px] text-4xl sm:py-[0] py-[12px] 
    border-t-1 border-b-1 dark:border-white tracking-wider"
    >
      THE BLOG
    </motion.div>
  );
}

export default TitleComponent;
